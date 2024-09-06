import React, { useContext } from 'react'
import '../Styles/Orders/OrderCard.css'



const OrderDetails = ({ id, orderId, status, cancelOrder, quantity, price, name, date }) => {




    return (
        <div>
            <div className="row container-fluid d-flex justify-content-center">
                <div className="col-md-10">
                    <h3 className='mt-2'>Order Details:</h3>
                    <div className="card my-4 rounded-0  border-warning rounded-1 div-cart-item-big mb-5 " >
                        <div className="card-header border-warning">
                            Order ID: {orderId}
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item border-warning div-cart-item-big">Order Date: {date}</li>
                            <li className="list-group-item border-warning div-cart-item-big">Order Status: {status}</li>
                            <li className="list-group-item border-warning div-cart-item-big">Total Price: $ {price}.00</li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default OrderDetails