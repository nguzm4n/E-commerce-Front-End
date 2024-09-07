import React from 'react'
import { Link, useNavigate } from 'react-router-dom';


const EmptyCart = ({text}) => {

    const navigate = useNavigate();
    return (
        <div className='container my-5'>
            <div className="row card  border-warning rounded-0 div-item-name d-flex justify-content-center " >
                <div className="col-md-12 d-flex justify-content-center">
                    <h1 className='mt-2'>{text}</h1>
                </div>
            </div>
            <div className='d-flex justify-content-center my-5'>

                <Link type="button" class="btn btn-outline-warning" to="/" aria-current="page">Back to home</Link>
            </div>
        </div>
    )
}

export default EmptyCart