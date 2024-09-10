import React, { useContext, useState, useEffect } from 'react'
import { Context } from '../../store/Appcontext';
import { useNavigate, Link } from "react-router-dom";
import Footer from '../Home/Footer';
import '../Styles/Home/Signup.css'

const Signup = () => {


    const { store, actions } = useContext(Context);
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("")
    const [address, setAddress] = useState("")
    const navigate = useNavigate();


    useEffect(() => {
        if (store.current_user !== null) {
            navigate('/')
        }
    }, [store.current_user])

    return (
        <>
            <div>
                <div className='container-fluid d-flex justify-content-center bg-black'>
                    <div className="row">
                        <div className="col-md-12 pt-5 pb-5 text-light titulo title-header">
                            Sign Up<span style={{"color": "#ffc107"}}>!</span>!
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-1 bg-dark"></div>
                        <div className="col-md-10 bg-secondary cart-container  ">
                            <div className='row my-5 mx-5 px-3 1 d-flex justify-content-center'>
                            <div className='col-md-7 div-sign-in   px-4 div-sign rounded-0  '>
                                <form onSubmit={actions.handleRegister}>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputEmail1" className="form-label mt-5 ">Email Address</label>
                                        <input type="email" className="form-control rounded-0 div-sign-up-input" id="email" name="email" value={store.email} onChange={actions.handleFormChange} />
                                        <div id="emailHelp" className="form-text"></div>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                        <input type="password" className="form-control rounded-0 div-sign-up-input" id="password" name="password" value={store.password} onChange={actions.handleFormChange} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
                                        <input type="text" className="form-control rounded-0 div-sign-up-input" id="username" name="username" value={store.username} onChange={actions.handleFormChange} />

                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                                        <input type="text" className="form-control rounded-0 div-sign-up-input" id="name" name="name" value={store.name} onChange={actions.handleFormChange} />

                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputAddress" className="form-label">Address</label>
                                        <input type="text" className="form-control rounded-0 div-sign-up-input" id="address" name="address" value={store.address} onChange={actions.handleFormChange} />

                                    </div>
                                    <div className='d-flex justify-content-center'>
                                    <button type="submit" className="btn btn-outline-warning my-5 rounded-0 btn-lg">Sign Up</button>
                                    </div>
                                </form>
                            </div>
                            </div>
                        </div>
                        <div className="col-md-1 bg-dark"></div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Signup
