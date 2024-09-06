import { useState } from 'react'
import injectContext from './store/Appcontext'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './components/Pages/Home'
import Navbar from './components/Home/Navbar'
import Login from './components/Pages/Login'
import Signup from './components/Pages/Signup'
import Notfound from './components/Pages/Notfound'
import Store from './components/Pages/Store'
import React from 'react'
import { Cloudinary } from '@cloudinary/url-gen';
import { auto } from '@cloudinary/url-gen/actions/resize';
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';
import { AdvancedImage } from '@cloudinary/react';
import Cart from './components/Pages/Cart'
import Telecaster from './components/Pages/Telecaster'
import Stratocaster from './components/Pages/Stratocaster'
import SG from './components/Pages/SG'
import Payment from './components/Pages/Payment'
import ReactDOM from "react-dom"
import SearchResults from './components/Pages/SearchResults'
import Order from './components/Pages/Order'
import MyOrders from './components/Pages/myOrders'
import OrderPayed from './components/Pages/OrderPayed'
import ManageUser from './components/Admin/ManageUser'
import AllUsers from './components/Admin/AllUsers'

const PayPalButton = paypal.Buttons.driver("react", {
    React,
    ReactDOM
});


function App() {



  return (

    <BrowserRouter>
      <Navbar />
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/store" element={<Store />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<Notfound />} />
        <Route path="/stratocaster" element={<Stratocaster />} />
        <Route path="/sg" element={<SG />} />
        <Route path="/telecaster" element={<Telecaster />} />
        <Route path="searchresults" element={<SearchResults/>} />
        <Route path="/pay" element={<Payment />} />
        <Route path="/order/:orderId" element={<Order />} />
        <Route path="/myorders" element={< MyOrders/>} />
        <Route path="/successfull" element={< OrderPayed />} />
        <Route path="/management" element={<ManageUser />} />
        <Route path="/allusers" element={<AllUsers />} />
      </Routes>
    </BrowserRouter>
  )
}

export default injectContext(App)


