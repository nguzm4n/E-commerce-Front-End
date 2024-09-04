import React, { useContext } from 'react'
import '../Styles/Store/GuitarCard.css'




const OrderDetails = ({ id, orderId, status, cancelOrder, quantity, price, name, date }) => {




    return (
        <div>
            <div className="row container-fluid d-flex justify-content-center">
                <div className="col-md-10">
                    <div className="card mt-5 mb-5" style={{"width": "18rem;"}}>
                        <div className="card-header">
                            Order ID: {orderId}
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Order Date:{date}</li>
                            <li className="list-group-item">Product Name:{name}</li>
                            <li className="list-group-item">Product Quantity:{quantity}</li>
                            <li className="list-group-item">Total Price: {price}</li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default OrderDetails