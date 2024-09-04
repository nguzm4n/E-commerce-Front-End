import React from 'react'
import { useParams } from 'react-router-dom';
import PaypalButton from './PaypalButton'
import Footer from '../Home/Footer'
import { GiGuitarHead } from 'react-icons/gi'
import OrderDetails from './OrderDetails';

const Order = () => {
    const { orderId } = useParams();
    console.log(orderId)
    return (
        <div>
            <div className='container-fluid d-flex justify-content-center bg-black'>
                <div className="row ">
                    <div className="col-md-12 pt-5 pb-5 text-light titulo">   <GiGuitarHead /> |  Your Order | <GiGuitarHead /> </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-1 bg-dark"></div>
                    <div className="col-md-10 bg-secondary parrilla">
                        <OrderDetails />

                        {/* {store.orders.orders && store.orders.orders.length > 0 ? (
                store.orders.orders.map((order) => (
                    <OrderDetails
                      key={order.id}
                      orderId={order.order_id}
                      status={order.status}
                      id={order.id}
                      date={order.created_at}
                      price={order.total_price}
                      pay={() => actions.fetchOrderDetails(order.id)}
                      cancelOrder={() => actions.deleteOrder(order.id)}
                      onclick={() => {goToPay()}}
                    />
                  
                ))
              ) : (
                <p>Loading...</p>
              )} */}
                        
                            
                       
                        
                        <PaypalButton orderId={orderId} />
                        
                        
                        
                    </div>
                    <div className="col-md-1 bg-dark"></div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Order
