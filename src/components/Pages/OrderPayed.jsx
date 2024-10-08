import React, { useContext, useEffect, useState } from 'react'
import Footer from '../Home/Footer'
import { GiGuitarHead } from 'react-icons/gi'
import OrderDetails from './OrderDetails';
import { Context } from '../../store/Appcontext';
import OrderNameItem from './OrderNameItem'
import { Link, useNavigate } from 'react-router-dom';
import '../Styles/Orders/OrderCard.css'
import Success from '../Cart/Success';


const OrderPayed = () => {

  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    if (store.order && store.order.id) {
      actions.fetchPayedOrderDetails(store.order.id);
    }
  }, []); 
  return (
    <div>
            <div className='container-fluid d-flex justify-content-center bg-black'>
                <div className="row ">
                    <div className="col-md-12 pt-5 pb-5 text-light titulo">   <GiGuitarHead /> |  ORDER INFO | <GiGuitarHead /> </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-1 bg-dark"></div>
                    <div className="col-md-10 bg-secondary parrilla">
                      <div className='d-flex justify-content-center my-5'>
                        <Success text={"YOUR ORDER WAS SUCCESSFULLY COMPLETED!"}/>
                    
                      </div>
                      
                        {!!store.order ? store.order.items.map((item) => (
                            <OrderNameItem
                                key={item.id} // Asegúrate de agregar una key única si es posible
                                name={item.product_name}
                                quantity={item.quantity}
                            />
                        )) : <h5>Loading</h5>}
                        <OrderDetails
                            id={store.order.id}
                            orderId={store.order.order_id}
                            date={store.order.created_at}
                            price={store.order.total_price}
                            status={store.order.status}
                        />
                        <div className='d-flex justify-content-center my-5'>
                        
                    <Link type="button" class="btn btn-outline-warning" to="/" aria-current="page">Back to home</Link>
                      </div>
                    </div>
                    
                    <div className="col-md-1 bg-dark"></div>
                </div>
            </div>
            <Footer />
        </div>
  )
}

export default OrderPayed