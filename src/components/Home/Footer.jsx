import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaSquareFacebook } from "react-icons/fa6";
import '../Styles/Home/Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-2 pt-5 ">
            <p className='footer-text'><b>Sucursales:</b><br/>

              Planet Coding Street 5948</p>

              <p className='footer-text'>Monday to Friday from 10:00 to 19:00 hrs. Saturday from 10:00 to 13:30 hrs.</p>
          </div>
          <div className="col-md-2 pt-5">
            <p className='footer-text'>Open since 2024<br/>
            Monday to Friday <br/>10:00 to 19:00 <br/>
            Saturday<br/>
            10:00 to 13:00</p>
           <p className='footer-text-1'>Copyright Mukan - Mukan Industries</p>
          </div>
          <div className="col-md-2 pt-5">
            <h4 className='footer-h4'>Contact</h4>
            <p className='footer-text'>mail@email.com</p>
            <p className='footer-text'>  <BiLogoGmail size={25} /> <FaInstagram  size={25}/> <FaSquareFacebook  size={25}/></p>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    </div>
  )
}

export default Footer