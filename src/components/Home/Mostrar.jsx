import React from 'react'
import g1 from '../img/home/g1.jpg'
import g2 from '../img/home/g2.jpg'
import '../Styles/Home/mostrar.css'
import { FaGuitar } from "react-icons/fa6";


const Mostrar = () => {
  return (
    <div className='bg-black'>
        <div className="container-fluid py-4 ">
            <div className="row">
                <div className="col-md-7 ps-5 py-5">
                <div className="">
                    <img src={g1} alt="" className='img-back'/>
                </div></div>
                <div className="col-md-5 py-5">
                <div className="">
                    <div className='parrafo card'>
                        
                        <h2 className='ms-auto me-auto mt-4'>Explore your Talent!!!</h2>
                      
                        <p className='ms-auto me-auto mt-4'>We have the most complete stock of guitars for you!</p>
                        <p className='ms-3 me-3 mt-4'>Discover the epitome of musical craftsmanship with our exclusive range of guitars. Whether you're a seasoned performer or an aspiring artist, our guitars are designed to elevate your sound and inspire your creativity.</p>
                        <p className='ms-3 me-3 mt-4'>Discover the music of your soul with one of our guitars, and feel free to create expand your GAS</p>
                        <h2 className='ms-auto me-auto mt-5'> Guitar Shop  <FaGuitar /></h2>
                    </div>
                </div></div>
            </div>
        </div>
    </div>
  )
}

export default Mostrar