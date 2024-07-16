import React, { useEffect, useRef } from 'react';

const Paypal = () => {
    const paypal = useRef();

    useEffect(() => {
        if (!paypal.current.innerHTML) { // Verifica si el contenedor ya está lleno
            window.paypal.Buttons({
                createOrder: (data, actions, err) => {
                    return actions.order.create({
                        intent: "CAPTURE",
                        purchase_units: [
                            {
                                description: "Guitar",
                                amount: {
                                    currency_code: "USD",
                                    value: 650.00
                                }
                            }
                        ]
                    });
                },
                onApprove: async (data, actions) => {
                    const order = await actions.order.capture();
                    console.log(order);
                },
                onError: (err) => {
                    console.log(err);
                }
            }).render(paypal.current);
        }
    }, []);

    return (
        <div>
            Paypal
            <div ref={paypal}></div>
        </div>
    );
};

export default Paypal;
