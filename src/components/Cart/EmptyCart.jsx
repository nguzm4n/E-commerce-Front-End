import React from 'react'
import { Link, useNavigate } from 'react-router-dom';


const EmptyCart = () => {

    const navigate = useNavigate();
    return (
        <div className='container my-5'>
            <div className="row card  border-warning rounded-0 div-cart-item-big d-flex justify-content-center " >
                <div className="col-md-12 d-flex justify-content-center">
                    <h1>There's nothing in your cart...</h1>
                </div>
            </div>
            <div className='d-flex justify-content-center my-5'>

                <Link type="button" class="btn btn-outline-warning" to="/" aria-current="page">Back to home</Link>
            </div>
        </div>
    )
}

export default EmptyCart