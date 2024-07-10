import React, { useEffect, useRef } from 'react';

const PayPalButton = () => {
    const paypalContainerRef = useRef();

    useEffect(() => {
        const paypalContainer = paypalContainerRef.current;
        
        // Limpia cualquier botón de PayPal anterior
        paypalContainer.innerHTML = '';

        window.paypal.Buttons({
            createOrder: function(data, actions) {
                return fetch('http://127.0.0.1:5000/api/paypal/create-order', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
                .then(response => response.json())
                .then(order => order.id);
            },
            onApprove: function(data, actions) {
                return fetch('http://127.0.0.1:5000/api/paypal/capture-order', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        orderID: data.orderID,
                    }),
                })
                .then(response => response.json())
                .then(details => {
                    alert('Transaction completed by ' + details.payer.payer_info.first_name);
                    
                });
            }
        }).render(paypalContainer);

    }, []);

    return (
        <div>
            <div id="paypal-button-container" ref={paypalContainerRef}></div>
        </div>
    );
};

export default PayPalButton;
