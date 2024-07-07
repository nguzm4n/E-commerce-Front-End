import React, { useContext, useState, useEffect } from 'react'
import { Context } from '../../store/Appcontext';
import { useNavigate, Link } from "react-router-dom";



const Login = () => {

    
    const { store, actions } = useContext(Context);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();


    useEffect(() => {
        if (store.access_token !== null)  { navigate("/") }
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
        <>
            <div className='container'>
                <div className='row d-flex justify-content-center mt-5'>
                    <form onSubmit={handleLogin}>
                        <div className="mb-3">
                            <label htmlFor="example InputEmail1"className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" value={email} onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1"  name="password" value={password} onChange={handleChange}/>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div >
            </div>
            </>
            )
}

            export default Login