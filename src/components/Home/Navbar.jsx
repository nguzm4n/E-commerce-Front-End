import React from 'react'
import { FaGuitar } from "react-icons/fa6";
import { IoMdCart } from "react-icons/io";


const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg  bg-dark " data-bs-theme="dark"> 
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Guitar Shop <FaGuitar /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <form className="d-flex " role="search">
                            <input className="form-control me-2 " type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-dark " type="submit">Search</button>
                        </form>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Guitars</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">F.A.Q</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contact</a>
                            </li>
                            <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <IoMdCart color='white' size={25}/>
                            </a>
                            <ul className="dropdown-menu">
                                <h6 className='ms-3 mt-1'>Empty...</h6>
                            </ul>
                            </li>
                        </ul>
                        
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link btn btn-outline-secondary " aria-current="page" href="#">Log In</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link btn btn-outline-secondary ms-2" href="#">Sign Up</a>
                            </li>
                       
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar