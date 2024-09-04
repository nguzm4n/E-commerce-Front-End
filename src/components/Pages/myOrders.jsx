import React, { useContext, useEffect } from 'react'
import Footer from '../Home/Footer'
import { IoMdCart } from "react-icons/io";
import { Context } from '../../store/Appcontext';
import '../Styles/Cart/Cart.css'
import { useNavigate } from 'react-router-dom';
import OrderCard from '../GuitarStore/OrderCard'

const MyOrders = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  useEffect(() => {
    
  }, []);


  


  return (
    <div>
      <div className='container-fluid d-flex justify-content-center bg-black'>
        <div className="row">
          <div className="col-md-12 pt-5 pb-5 text-light titulo">
            My Orders! <IoMdCart />
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-1 bg-dark">Hello</div>
          <div className="col-md-10 bg-secondary cart-container ">
            <div className=''>
              <OrderCard />
            </div>
            <div className='d-flex justify-content-center'>
           

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
