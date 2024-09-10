
import React from 'react'
import '../Styles/Home/Home.css'
import Mostrar from '../Home/Mostrar'
import Footer from '../Home/Footer'
import { GiGuitarHead } from 'react-icons/gi'
import { IoDocumentText } from "react-icons/io5";
import '../Styles/Home/About.css'
import reactIcon from '../img/Icons/react.png'
import flask from '../img/Icons/flask.jpg'

const About = () => {
  return (
    <div>
      <div className='container-fluid d-flex justify-content-center bg-black'>
        <div className="row ">
          <div className="col-md-12 pt-5 pb-5 text-light titulo">    <span style={{ "color": "#ffc107" }}>A</span>bout This <span style={{ "color": "#ffc107" }}>W</span>ebsite  <IoDocumentText style={{ "color": "#ffc107" }} /></div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className='col-md-12 div-about'>

            <div className='d-flex justify-content-center mt-5 '>
              <div>

                <h1 className='about-text'> PROYECT </h1>
                <p className='about-text'>
                  This E-Commerce Project was developed with the purpose of using my full-stack skills, including user authentication, PayPal payment integration, and product and order management.
                  It offers a seamless shopping experience from product browsing to checkout, with a secure and efficient order processing system.
                </p>
                <div className="">
                  <h1 className='about-text'>Tecnologies</h1>
                  <img src={reactIcon} alt="" className='about-img' />
                  <img src={flask} alt="" className='about-img' />
                  <p className='about-text'>
                    This project is built with React for the frontend, ensuring a dynamic and responsive user interface.
                    Flask is used for the backend, providing a robust API for managing products, user authentication, and payment integration.
                    The project also utilizes SQLAlchemy for database management, UUID for unique identifiers, and JWT for secure user authentication.
                  </p>
                </div>

                <div className="">
                  <h1 className='about-text'>Features</h1>
                  <ul className='about-text'>
                    <li>User authentication with JWT (JSON Web Tokens)</li>
                    <li>Product browsing and search functionality</li>
                    <li>Shopping cart management</li>
                    <li>Order creation and tracking</li>
                    <li>Integration with PayPal for secure payments</li>
                    <li>Admin panel for managing products and orders</li>
                  </ul>
                </div>
                <div className="">
                  <h1 className='about-text'>Challenges</h1>
                  <p className='about-text'>
                    One of the key challenges in this project was integrating the PayPal API to ensure secure and seamless payment processing.
                    Another challenge was implementing robust user authentication using JWT while managing user sessions across different devices.
                    Additionally, ensuring that the application scaled efficiently with real-time product and order updates posed an interesting problem to solve.
                  </p>
                </div>
                
              </div>

            </div>

          </div>
        </div>
          <div className='row'>
            <div className="col-md-12 bg-black d-flex jusitify-content-center" >
              <div className='text-align-center center-items'>
            <h1 className='about-text text-warning'>Developed By:</h1>
            <h2 className='about-text'>Nicolás Guzmán</h2>
            <p className='about-text'>
                    A passionate full-stack developer with expertise in building secure and scalable web applications.
                    This project reflects my commitment to learning new technologies and applying them to create practical, real-world solutions.
                  </p>
            </div>
            <div>
                  
                  </div>
                  
            </div>
          </div>
      </div>
      <Footer />
    </div>
  )
}

export default About