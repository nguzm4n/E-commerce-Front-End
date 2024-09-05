import React, { useContext, useEffect, useRef, useState  } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../../store/Appcontext';

const PaypalButton = ({ orderId }) => {
    const paypal = useRef();
    const [orderDetails, setOrderDetails] = useState(null);
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();

    const fetchOrderDetails = async () => {
        try {
            const response = await fetch(`http://127.0.0.1:5000/order/${orderId}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${store.access_token}` 
                }
            });
            const data = await response.json();
            if (response.ok) {
                setOrderDetails(data);
                return data; // Retorna los detalles de la orden
            } else {
                console.log("Error fetching order details:", data.msg);
            }
        } catch (error) {
            console.error("Error fetching order details:", error.message);
        }
        return null; // Retorna null si hubo un error
    };

    const updateOrderStatus = async (status) => {
        try {
            const response = await fetch(`http://127.0.0.1:5000/order/${orderId}/status`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${store.access_token}`
                },
                body: JSON.stringify({ status: status })
            });

            const data = await response.json();
            if (response.ok) {
                console.log(`Order status updated to ${status}`);
            } else {
                console.log("Error updating order status:", data.msg);
            }
        } catch (error) {
            console.error("Error updating order status:", error.message);
        }
    };



    useEffect(() => {
        if (!paypal.current.innerHTML) {
            window.paypal.Buttons({
                createOrder: (data, actions) => {
                    return actions.order.create({
                        intent: "CAPTURE",
                        purchase_units: [
                            {
                                description: `Order ${orderId}`,
                                amount: {
                                    currency_code: "USD",
                                    value: store.order.total_price.toFixed(2)
                                }
                            }
                        ]
                    });
                },
                onApprove: async (data, actions) => {
                    const orderData = await actions.order.capture();
                    console.log(orderData);
                    //Hacer fetch a la base de datos, verificar que el monto pagado coincida con el de la orden. si coinciden se cambia el status a pagado
                    const fetchedOrderDetails = await fetchOrderDetails();
                    console.log(fetchedOrderDetails);


                    const paymentDetails = {
                        order_id: orderId,
                        paypal_transaction_id: orderData.id,
                        payer_name: orderData.payer.name.given_name + " " + orderData.payer.name.surname,
                        payment_time: orderData.create_time,
                        amount: parseFloat(orderData.purchase_units[0].amount.value),
                        currency: orderData.purchase_units[0].amount.currency_code
                    };

                    try {
                        const response = await fetch('http://127.0.0.1:5000/payment', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                                'Authorization': `Bearer ${store.access_token}`
                            },
                            body: JSON.stringify(paymentDetails)
                        });
                
                        const data = await response.json();
                        if (response.ok) {
                            console.log("Payment details saved:", data);
                            // Aquí puedes cambiar el estado de la orden a pagada si todo es correcto
                        } else {
                            console.log("Error saving payment details:", data.msg);
                        }
                    } catch (error) {
                        console.error("Error saving payment details:", error.message);
                    }


                    if (fetchedOrderDetails) {
                        // Asegúrate de redondear ambos valores a dos decimales para evitar problemas de precisión
                        const paidAmount = parseInt(orderData.purchase_units[0].amount.value);
                        const expectedAmount = fetchedOrderDetails.order.total_price;
                        console.log("Fetched Order Details:", fetchedOrderDetails);
                        console.log("Total Price Type:", typeof fetchedOrderDetails.order.total_price);
                        console.log(paidAmount, expectedAmount)
                        if (paidAmount === expectedAmount) {
                            // Si el monto pagado es correcto, actualizar el estado a "Paid"
                            await updateOrderStatus("Paid", orderId);
                            navigate("/successfull")
                        } else {
                            // Si el monto pagado no coincide, actualizar el estado a "Frozen"
                            await updateOrderStatus("Frozen", orderId);
                        }
                    }

                },
                onError: (err) => {
                    console.log(err);
                }
            }).render(paypal.current);
        }
    }, [orderDetails]);

    return <div ref={paypal}></div>;
};

export default PaypalButton;
