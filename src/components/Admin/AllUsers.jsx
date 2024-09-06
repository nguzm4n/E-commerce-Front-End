import React, { useContext, useEffect,useState } from 'react'
import Footer from '../Home/Footer'
import { IoMdCart } from "react-icons/io";
import { Context } from '../../store/Appcontext';
import '../Styles/Cart/Cart.css'
import { useNavigate } from 'react-router-dom';
import OrderCard from '../GuitarStore/OrderCard'
import UserInfo from './UserInfo';

const AllUsers = () => {
  const { store, actions } = useContext(Context);
 
  const navigate = useNavigate();

  useEffect(() => {
    actions.getAllUsers()
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
            {store.users.users ? store.users.users.map((user) => (
                <UserInfo 
                    key={user.id}
                    userId={user.id}
                    user={user.id}
                    name={user.name}
                    mail={user.email}
                />
            ))  : null}
            </div>
          </div>
          <div className="col-md-1 bg-dark"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AllUsers;
