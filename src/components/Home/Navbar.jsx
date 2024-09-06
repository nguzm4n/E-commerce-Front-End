import React, { useContext, useState } from 'react';
import { FaGuitar } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';
import { Context } from '../../store/Appcontext';
import CartItem from '../Cart/CartItem';
import '../Styles/Home/Navbar.css';

const Navbar = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();
    const [search, setSearch] = useState("");

    const handleChange = (e) => {
        setSearch(e.target.value);
    };

    const handleSearch = (e) => {
        e.preventDefault();
        actions.searchItem(search, navigate);
    };

    return (
        <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/"><span style={{"color":"#ffc107"}}>G</span>uitar Shop <FaGuitar /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <form className="d-flex" role="search">
                        <input className="form-control me-2 rounded-1" type="search" value={search} onChange={handleChange} name="search" placeholder="Type a Guitar Model" aria-label="Search" />
                        <button className="btn btn-dark btn-search rounded-1" type="submit" onClick={handleSearch}>Search</button>
                    </form>
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link mx-2" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item dropdown cart-icon mx-2">
                            <button className="nav-link dropdown-toggle cart-icon" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Guitars
                            </button>
                            <ul className="dropdown-menu rounded-1" aria-labelledby="navbarDropdown">
                                <li><Link className="dropdown-item rounded-0 nav-dropdown" to="sg">SG Model</Link></li>
                                <li><Link className="dropdown-item rounded-0 nav-dropdown" to="stratocaster">Stratocaster Model</Link></li>
                                <li><Link className="dropdown-item rounded-0 nav-dropdown" to="telecaster">Telecaster Model</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link ms-2" to="#">About</Link>
                        </li>
                        <li className="nav-item dropdown" onClick={() => { actions.getCart() }}>
                            <Link className="nav-link dropdown-toggle mx-2" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <IoMdCart className='cart-icon' size={25} />
                            </Link>
                            <ul className="dropdown-menu custom-dropdown-menu rounded-1 border-secondary-subtle" style={{ minWidth: '350px', maxWidth: '500px' }}>
                                {store.cart.cart && store.cart.cart.length > 0 ? (
                                    store.cart.cart.map((item) => (
                                        <CartItem
                                            key={item.id}
                                            id={item.id}
                                            img={item.product_avatar}
                                            quantity={item.quantity}
                                            name={item.product_name} />
                                    ))
                                ) : (
                                    <h5 className='mt-1 text-center rounded-0'>Your Cart is empty </h5>
                                )}
                                {store.cart.cart && store.cart.cart.length > 0 ? (
                                    <li className='text-center pb-2'>
                                        <Link to="cart">GO TO CART</Link>
                                    </li>
                                ) : null}
                            </ul>
                        </li>
                    </ul>
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        {store.access_token  ? (
                            <>
                                {store.current_user?.admin == true && (<li className="nav-item">
                                    <Link className="nav-link mx-2 " to="myorders">My Orders</Link>
                                </li>)}
                                {store.current_user?.admin && (<li className="nav-item">
                                    <Link className="nav-link mx-2 " to="management">Management</Link>
                                </li>)}
                                <li className='nav-item'>
                                    <Link className='nav-link  mx-2' to="/" onClick={actions.logout}>Log Out</Link>
                                </li>
                            </>
                        ) : (
                            <>
                                <li className="nav-item">
                                    <Link className="nav-link mx-2" to="signin">Sign In</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link  mx-2" to="signup">Sign Up</Link>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
