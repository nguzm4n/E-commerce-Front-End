import React, { useContext } from 'react'
import '../Styles/Store/GuitarCard.css'




const GuitarCard = ({ id, orderId, status, onclick, cancelOrder, price, pay }) => {




    return (
        <div>
            <div className="row container-fluid d-flex justify-content-center">
                <div className="col-md-6">
                    <div className="card my-5">
                        <div className="card-header">
                            Order ID: {orderId}
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Order Status: {status}</h5>
                            <h5 className="card-title">Amount: {price} </h5>
                            <p className="card-text">Click on Order Details to see the entire order.</p>
                            <a href="#" onClick={onclick} className="btn btn-primary my-1">Order Details</a>  <a href="#" className=" my-1 btn btn-danger" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Cancel Order</a>
                        </div>
                        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
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
                                        <button type="button" onClick={cancelOrder} className="btn btn-outline-danger">Cancel my order</button>
                                        <button type="button" className="btn btn-outline-primary" data-bs-dismiss="modal">No Thanks</button>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default GuitarCard