import React, { useContext, useEffect,useState } from 'react'
import Footer from '../Home/Footer'
import { IoMdCart } from "react-icons/io";
import { Context } from '../../store/Appcontext';
import '../Styles/Cart/Cart.css'
import { useNavigate,useParams } from 'react-router-dom';
import OrderCard from '../GuitarStore/OrderCard'
import UserInfo from './UserInfo';
import UserOrderInfo from './UserOrderInfo';
import EmptyCart from '../Cart/EmptyCart';

const UserOrders = () => {
  const { store, actions } = useContext(Context);
  const { userId } = useParams();
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
                      orderId={order.id}
                      status={order.status}
                      userId={order.user_id}
                      id={order.id}
                      date={order.created_at}
                      price={order.total_price}
                      admin={store.current_user.admin}
                      cancelOrder={() => actions.AdminDeleteOrder(order.id,order.user_id)}
                      onClick={() => actions.fetchOrderDetails(order.id, navigate)}
                    />
                  
                ))
              ) : (
                <EmptyCart 
                text={"User has no orders"}
                />
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
