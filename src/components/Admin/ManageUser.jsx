import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../Home/Footer';
import { Context } from '../../store/Appcontext';
import '../Styles/Cart/Cart.css';
import UserInfo from './UserInfo';
import EmptyCart from '../Cart/EmptyCart';
import '../Styles/Admin/Manage.css'


const ManageUser = () => {
  const { store, actions } = useContext(Context);
  const [username, setUsername] = useState("");
  const navigate = useNavigate();


  const handleSearchUser = (e) => {
    e.preventDefault();
    actions.searchUser(username);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "username") setUsername(value);
  };

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
          <div className="col-md-10 bg-secondary cart-container">
            <div className="input-group mb-3 d-flex justify-content-center mt-5">
              <form onSubmit={handleSearchUser}>
                <div className="mb-3 d-flex">
                  <input
                    type="text"
                    className="form-control input-manage rounded-0 border-light-subtle"
                    id="exampleInputEmail1"
                    aria-describedby="textHelp"
                    name="username"
                    placeholder="Name or Email"
                    value={username}
                    onChange={handleChange}
                  />
                  <button type="submit" className="btn btn-warning ms-2">Search</button>
                </div>
              </form>
              <div>
              <button
                className="btn btn-success ms-2"
                onClick={() => {actions.clearStoreUsers()}}
              >
               Reset
              </button>
              </div>
            </div>
            <div className=''>
              {store.users.length > 0 ? store.users.map((user) => (
                <UserInfo
                  key={user.id}
                  userId={user.id}
                  user={user.id}
                  name={user.name}
                  mail={user.email}
                  onClick={() => actions.getUserOrders(user.id, navigate)} 
                  
                />
              )) :  <EmptyCart text="Not Current User Information"/>}
            </div>
          </div>
          <div className="col-md-1 bg-dark"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ManageUser;
