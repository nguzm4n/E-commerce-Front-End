import React, { useContext, useEffect,useState } from 'react'
import Footer from '../Home/Footer'
import { IoMdCart } from "react-icons/io";
import { Context } from '../../store/Appcontext';
import '../Styles/Cart/Cart.css'
import { useNavigate } from 'react-router-dom';
import OrderCard from '../GuitarStore/OrderCard'
import UserInfo from './UserInfo';
import UserOrderInfo from './UserOrderInfo';

const UserOrders = () => {
  const { store, actions } = useContext(Context);
 
  const navigate = useNavigate();

  useEffect(() => {
    
  }, [])




  return (
    <div>
      <div className='container-fluid d-flex justify-content-center bg-black'>
        <div className="row">
          <div className="col-md-12 pt-5 pb-5 text-light titulo">
            Users Info 
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-1 bg-dark"></div>
          <div className="col-md-10 bg-secondary cart-container ">
            <div className=''>
            {store.userOrders && store.userOrders.length > 0 ? (
                store.userOrders.map((order) => (
                    <UserOrderInfo
                      key={order.id}
                      orderId={order.order_id}
                      status={order.status}
                      id={order.id}
                      date={order.created_at}
                      price={order.total_price}
                      admin={store.current_user.admin}
                      cancelOrder={() => actions.deleteOrder(order.id)}
                      onClick={() => actions.fetchOrderDetails(order.id, navigate)}
                    />
                  
                ))
              ) : (
                <p>Loading...</p>
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

export default UserOrders;
