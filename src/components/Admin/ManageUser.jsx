import React, { useContext, useEffect, useState } from 'react'
import Footer from '../Home/Footer'
import { IoMdCart } from "react-icons/io";
import { Context } from '../../store/Appcontext';
import '../Styles/Cart/Cart.css'
import { useNavigate } from 'react-router-dom';
import OrderCard from '../GuitarStore/OrderCard'
import UserInfo from './UserInfo';

const ManageUser = () => {
  const { store, actions } = useContext(Context);
  const handleSearchUser = (e) => {
    e.preventDefault()
    actions.searchUser(username)
  }
  const navigate = useNavigate();
  const [username, setUsername] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "username") setUsername(value);
  
};

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
            <div className="input-group mb-3 d-flex justify-content-center mt-5">
            <form onSubmit={handleSearchUser}>
                                <div className="mb-3 d-flex">
                                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="textHelp" name="username"  placeholder="Name or Email" value={username} onChange={handleChange} />
                                    <button type="submit" className="btn btn-outline-warning">Search</button>
                                </div>                                                      
                            </form>
            </div>
            <div className=''>
              {store.users.users ? store.users.users.map((user) => (
                <UserInfo
                  key={user.id}
                  userId={user.id}
                  user={user.id}
                  name={user.name}
                  mail={user.email}
                />
              )) : null}
            </div>
          </div>
          <div className="col-md-1 bg-dark"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ManageUser;
