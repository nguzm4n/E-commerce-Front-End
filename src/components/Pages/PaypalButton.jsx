import React, { useState } from 'react';
import Paypal from '../Cart/Paypal';

const PayPalButton = ({ orderId }) => {
    const [checkout, setCheckout] = useState(false);

    return (
        <div className="">
            <div className='divpago '>
                {checkout ? (
                    
                    <Paypal orderId={orderId} />
                    
                ) : (
                    <div className="row ">
                        <div className="container d-flex justify-content-center">
                    <button className='btn btn-success my-5 ' onClick={() => { setCheckout(true) }}>
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
