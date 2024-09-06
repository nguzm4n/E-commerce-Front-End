import React, { useContext } from 'react'
import '../Styles/Orders/OrderCard.css'
import { CgNotes } from "react-icons/cg";
import { IoIosInformationCircle } from "react-icons/io";


const UserOrderInfo = ({ id, orderId, status, onClick, cancelOrder, price, pay, date, admin }) => {




    return (
        <div>
            <div className="row container-fluid d-flex justify-content-center ">
                
                <div className="col-md-6 my-3">
                <IoIosInformationCircle size={30} style={{"color": "#ffc107"}} />
                    <div className="card my-2 rounded-1 border-warning div-cart-item-big ">
                        <div className="card-header border-warning ">
                            Order ID: {orderId}
                        </div>
                        
                        <ul className="list-group list-group-flush  ">
                            <li className="list-group-item border-warning div-cart-item-big">Order Date: {date}</li>
                            <li className="list-group-item border-warning div-cart-item-big">Order Status: {status} *</li>
                            <li className="list-group-item border-warning div-cart-item-big">Total Price: $ {price}.00</li>
                        </ul>
                        <div className="card-body">
                            <p className="card-text mt-3">Click on Order Details to see the entire order.</p>
                            <a href="#" onClick={onClick} className="btn btn-outline-warning my-1 rounded-1">Order Details</a> {/* Condicional para mostrar el botón de cancelar solo si el estado no es "Paid" */}
                            
                              {admin == true && status !== "Paid"  && (
                                <a href="#" className="my-1 btn btn-outline-danger ms-3 rounded-1" onClick={cancelOrder} >Cancel Order</a>
                            )}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default UserOrderInfo