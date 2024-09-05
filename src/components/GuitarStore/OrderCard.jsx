import React, { useContext } from 'react'
import '../Styles/Orders/OrderCard.css'




const GuitarCard = ({ id, orderId, status, onClick, cancelOrder, price, pay, date }) => {




    return (
        <div>
            <div className="row container-fluid d-flex justify-content-center ">
                <div className="col-md-6">
                    <div className="card my-5 rounded-1 border-warning div-cart-item-big ">
                        <div className="card-header border-warning ">
                            Order ID: {orderId}
                        </div>
                        
                        <ul className="list-group list-group-flush  ">
                            <li className="list-group-item border-warning div-cart-item-big">Order Date: {date}</li>
                            <li className="list-group-item border-warning div-cart-item-big">Order Status: {status}</li>
                            <li className="list-group-item border-warning div-cart-item-big">Total Price: $ {price}.00</li>
                        </ul>
                        <div className="card-body">
                            <p className="card-text mt-3">Click on Order Details to see the entire order.</p>
                            <a href="#" onClick={onClick} className="btn btn-outline-warning my-1 rounded-1">Order Details</a> {/* Condicional para mostrar el botón de cancelar solo si el estado no es "Paid" */}
                            {status !== "Paid" && (
                                <a href="#" className="my-1 btn btn-outline-danger ms-3 rounded-1" onClick={cancelOrder} >Cancel Order</a>
                            )}
                        </div>
                        {/* <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h1 className="modal-title fs-5" id="staticBackdropLabel">Cancel Order</h1>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body fs-4">
                                        ¿Are you sure you want to cancel your order?
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button"  className="btn btn-outline-danger" data-bs-dismiss="modal">Cancel my order</button>
                                        <button type="button" className="btn btn-outline-primary" data-bs-dismiss="modal">No Thanks</button>

                                    </div>
                                </div>
                            </div>
                        </div> */}

                    </div>
                </div>
            </div>

        </div>
    )
}

export default GuitarCard