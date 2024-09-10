import React from 'react';
import '../Styles/Store/Store.css';
import Footer from '../Home/Footer.jsx';
import { RiLockPasswordFill } from "react-icons/ri";

const ForgotPassword = () => {

  const notDefault = (e) => {
    e.preventDefault(); // Llamar a preventDefault como una función
    console.log("still on progress");
  };

  return (
    <div>
      <div className='container-fluid d-flex justify-content-center bg-black'>
        <div className="row ">
          <div className="col-md-12 pt-5 pb-5 text-light titulo title-header">
            <RiLockPasswordFill /> | Recover Your <span style={{ "color": "#ffc107" }}>P</span>assword | <RiLockPasswordFill />
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-1 bg-dark">
          </div>
          <div className="col-lg-10 bg-secondary parrilla d-flex justify-content-center cart-container align-items-center">
            <div className="input-group mb-3 d-flex justify-content-center mt-5">
              <form onSubmit={notDefault}> {/* Llamar a notDefault en onSubmit */}
                <div>Insert Your Email</div>
                <div className="mb-3 d-flex">
                  <input
                    type="text"
                    className="form-control input-manage rounded-0 border-light-subtle"
                    id="exampleInputEmail1"
                    aria-describedby="textHelp"
                    name="username"
                    placeholder="Email"
                  />
                  <button type="submit" className="btn btn-warning ms-2">Search</button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-1 bg-dark">
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ForgotPassword;
