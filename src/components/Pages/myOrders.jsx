import React, { useContext, useEffect,useState } from 'react'
import Footer from '../Home/Footer'
import { IoMdCart } from "react-icons/io";
import { Context } from '../../store/Appcontext';
import '../Styles/Cart/Cart.css'
import { useNavigate } from 'react-router-dom';
import OrderCard from '../GuitarStore/OrderCard'
import EmptyCart from '../Cart/EmptyCart';


const MyOrders = () => {
  const { store, actions } = useContext(Context);
 
  const navigate = useNavigate();
  useEffect(() => {
    actions.getFullOrders()
  }, []);

  const goToPay = () => {
    navigate("/order/5")
  }





  return (
    <div>
      <div className='container-fluid d-flex justify-content-center bg-black'>
        <div className="row">
          <div className="col-md-12 pt-5 pb-5 text-light titulo title-header">
            My Orders <IoMdCart />
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-1 bg-dark">Hello</div>
          <div className="col-md-10 bg-secondary cart-container ">
            <div className=''>
              {store.orders.orders && store.orders.orders.length > 0 ? (
                store.orders.orders.map((order) => (
                    <OrderCard
                      key={order.id}
                      orderId={order.order_id}
                      status={order.status}
                      id={order.id}
                      date={order.created_at}
                      price={order.total_price}
                      
                      cancelOrder={() => actions.deleteOrder(order.id)}
                      onClick={() => actions.fetchOrderDetails(order.id, navigate)}
                    />
                  
                ))
              ) : (
                <EmptyCart  text={"There's nothing here"}/>
              )}

            </div>
            
          </div>
          <div className="col-md-1 bg-dark"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MyOrders;
