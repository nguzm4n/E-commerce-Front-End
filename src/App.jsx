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
import Solar from './components/Pages/Telecaster'
import Prs from './components/Pages/Stratocaster'
import Chapman from './components/Pages/SG'


function App() {


  const cld = new Cloudinary({ cloud: { cloudName: 'dfhyziduf' } });

  // Use this sample image or upload your own via the Media Explorer
  const img = cld
    .image('cld-sample-5')
    .format('auto') // Optimize delivery by resizing and applying auto-format and auto-quality
    .quality('auto')
    .resize(auto().gravity(autoGravity()).width(500).height(500)); // Transform the image: auto-crop to square aspect_ratio


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
        <Route path="/stratocaster" element={<Prs />} />
        <Route path="/sg" element={<Chapman />} />
        <Route path="/telecaster" element={<Solar />} />
      </Routes>
    </BrowserRouter>
  )
}

export default injectContext(App)


