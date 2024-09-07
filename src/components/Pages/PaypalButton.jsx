import React, { useState } from 'react';
import Paypal from '../Cart/Paypal';
import '../Styles/Cart/Paypal.css'

const PayPalButton = ({ orderId }) => {
    const [checkout, setCheckout] = useState(false);

    return (
        <div className="d-flex justify-content-center div-btn-paypal mb-5">
            <div className='divpago mt-5 w-100 d-flex justify-content-center'>
                {checkout ? (
                    
                    <Paypal orderId={orderId} />
                    
                ) : (
                    <div className="row ">
                        <div className="container d-flex justify-content-center">
                    <button className='btn btn-success my-5 btn-lg' onClick={() => { setCheckout(true) }}>
                        Continue to payment
                    </button>
                    </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PayPalButton;
