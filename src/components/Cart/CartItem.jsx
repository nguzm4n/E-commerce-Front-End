import React from 'react'
import '../Styles/Cart/CartItem.css'

const CartItem = ({ img, name, quantity }) => {

    return (
        <div>
            <div className="card mb-3 mx-3 mt-3 rounded-1" style={{maxWidth: "540px"}}>
                <div className="row ">
                    <div className="col-sm-4 imagen-cart rounded-1  ">
                        <img style={{maxWidth: "100px"}} src={img} className="img-fluid  rounded-1" alt="..." />
                    </div>
                    <div className="col-sm-8 ">
                        <div className="card-body">
                            <h5 className="card-title">{name}</h5>
                            <div className='d-flex'>
                            <p className="card-text">Quantity x {quantity} </p>  
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem