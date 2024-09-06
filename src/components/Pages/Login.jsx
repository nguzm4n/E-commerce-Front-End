import React, { useContext, useState, useEffect } from 'react'
import { Context } from '../../store/Appcontext';
import { useNavigate, Link } from "react-router-dom";
import Footer from '../Home/Footer';
import '../Styles/Home/Signin.css'


const Login = () => {


    const { store, actions } = useContext(Context);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();


    useEffect(() => {
        if (store.access_token !== null) { navigate("/") }
    }, [store.access_token])


    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "email") setEmail(value);
        if (name === "password") setPassword(value);
    };

    const handleLogin = (e) => {
        e.preventDefault();
        actions.login({ email, password });

    };

    return (



        <div>
            <div className='container-fluid d-flex justify-content-center bg-black'>
                <div className="row">
                    <div className="col-md-12 pt-5 pb-5 text-light titulo">
                        Sign In!
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-1 bg-dark"></div>
                    <div className="col-md-10 bg-secondary cart-container ">
                        <div className='row d-flex justify-content-center my-5 mx-5 rounded-1'>
                            <div className='col-md-7 div-sign-in  rounded-1 px-4  '>
                            <form onSubmit={handleLogin}>
                                <div className="mb-3">
                                    <label htmlFor="example InputEmail1" className="form-label mt-5">Email </label>
                                    <input type="email" className="form-control rounded-0 div-sign-in-input " id="exampleInputEmail1" aria-describedby="emailHelp" name="email" value={email} onChange={handleChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                    <input type="password" className="form-control rounded-0 div-sign-in-input" id="exampleInputPassword1" name="password" value={password} onChange={handleChange} />
                                </div>
                                <div className='d-flex justify-content-center'>
                                <button type="submit" className="btn btn-outline-warning mt-3 mb-5 rounded-0 btn-lg">Sign In</button>
                                </div>
                            </form>
                        </div >
                        </div>
                        </div>
                        <div className="col-md-1 bg-dark"></div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Login