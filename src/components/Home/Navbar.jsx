import React, { useContext } from 'react';
import { FaGuitar } from "react-icons/fa6";
import { IoMdCart } from "react-icons/io";
import { Link } from 'react-router-dom';
import { Context } from '../../store/Appcontext';
import CartItem from '../Cart/CartItem';
import '../Styles/Home/Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const Navbar = () => {
    const { store, actions } = useContext(Context);

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Guitar Shop <FaGuitar /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-dark" type="submit">Search</button>
                    </form>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <button className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Guitars
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link className="dropdown-item" to="sg">SG Model</Link></li>
                                    <li><Link className="dropdown-item" to="stratocaster">Stratocaster Model</Link></li>
                                    <li><Link className="dropdown-item" to="telecaster">Telecaster Model</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">About</Link>
                            </li>
                            <li className="nav-item dropdown" onClick={() => { actions.getCart() }}>
                                <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <IoMdCart color='white' size={25} />
                                </Link>
                                <ul className="dropdown-menu custom-dropdown-menu" style={{ minWidth: '350px', maxWidth: '500px' }}>
                                    {store.cart.cart ? store.cart.cart.map((item) => (
                                        <CartItem
                                            key={item.id}
                                            id={item.id}
                                            img={item.product_avatar}
                                            quantity={item.quantity}
                                            name={item.product_name} />
                                    )) : <h5 className='mt-1 text-center'> Your Cart is empty (∪｡∪)｡｡｡zzz</h5>}
                                    {!!store.cart.cart && <li className='text-center pb-2'><Link to="cart">GO TO CART</Link></li>}
                                </ul>
                            </li>
                        </ul>
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            {store.access_token ? (
                                <li className='nav-item'>
                                    <Link className='nav-link btn btn-outline-secondary' to="/" onClick={actions.logout}>Log Out</Link>
                                </li>
                            ) : (
                                <>
                                    <li className="nav-item">
                                        <Link className="nav-link btn btn-outline-secondary" to="signin">Sign In</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link btn btn-outline-secondary ms-2" to="signup">Sign Up</Link>
                                    </li>
                                </>
                            )}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
