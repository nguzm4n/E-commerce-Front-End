import React, { useContext, useEffect, useRef, useState } from 'react';
import { Context } from '../../store/Appcontext';

const PaypalButton = ({ orderId }) => {
    const paypal = useRef();
    const [orderDetails, setOrderDetails] = useState(null);
    const { store } = useContext(Context);

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
    

    // useEffect(() => {
    //     if (orderDetails) {
    //         console.log(orderDetails);
            
    //     }
    // }, [orderDetails]);

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
                    
                    const fetchedOrderDetails = await fetchOrderDetails();
                    console.log(fetchedOrderDetails);

                    
                
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
