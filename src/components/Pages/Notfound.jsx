import React, { useContext, useEffect,useState } from 'react'
import Footer from '../Home/Footer'
import '../Styles/Cart/Cart.css'
import EmptyCart from '../Cart/EmptyCart';
import { BiSolidMessageError } from "react-icons/bi";


const NotFound = () => {

 





  return (
    <div>
      <div className='container-fluid d-flex justify-content-center bg-black'>
        <div className="row">
          <div className="col-md-12 pt-5 pb-5 text-light titulo title-header">
            ERROR 404 PAGE NOT FOUND <BiSolidMessageError />
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-1 bg-dark"></div>
          <div className="col-md-10 bg-secondary cart-container ">
            <div className=''>
             
                <EmptyCart  text={"There's nothing here"}/>
              

            </div>
            
          </div>
          <div className="col-md-1 bg-dark"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default NotFound;
