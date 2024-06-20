import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaSquareFacebook } from "react-icons/fa6";
const Footer = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4 pt-5">
            <p>Sucursales:<br/>

              Planet Coding Street 5948</p>

              <p>Monday to Friday from 10:00 to 19:00 hrs. Saturday from 10:00 to 13:30 hrs.</p>
          </div>
          <div className="col-md-4 pt-5">
            <p>Open since 2024<br/>
            Monday to Friday <br/>10:00 to 19:00 <br/>
            Saturday<br/>
            10:00 to 13:00</p>
           <p>Copyright Mukan - Mukan Industries</p>
          </div>
          <div className="col-md-4 pt-5">
            <h4>Contact</h4>
            <p>mail@email.com</p>
            <p>  <BiLogoGmail size={25} /> <FaInstagram  size={25}/> <FaSquareFacebook  size={25}/></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer