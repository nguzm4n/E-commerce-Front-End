import React, { useContext } from 'react'
import '../Styles/Store/GuitarCard.css'




const OrderDetails = ({ id, orderId, status, cancelOrder, quantity, price, name, date }) => {




    return (
        <div>
            <div className="row container-fluid d-flex justify-content-center">
                <div className="col-md-10">
                    <div className="card my-5 rounded-0  border-black rounded-1 " >
                        <div className="card-header border-black">
                            Order ID: {orderId}
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item border-black">Order Date: {date}</li>
                            <li className="list-group-item border-black">Order Status: {status}</li>
                            <li className="list-group-item border-black">Total Price: $ {price}.00</li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default OrderDetails