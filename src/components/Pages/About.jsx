
import React from 'react'
import '../Styles/Home/Home.css'
import Mostrar from '../Home/Mostrar'
import Footer from '../Home/Footer'
import { GiGuitarHead } from 'react-icons/gi'
import { IoDocumentText } from "react-icons/io5";
import '../Styles/Home/About.css'


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

            <div className='d-flex justify-content-center mt-5'>
              <div>
              <h2 className='about-text'> Proyect Story </h2>
              <p className='about-text'>This eCommerce project was developed with the purpose of using my full-stack skills, including user authentication, PayPal payment integration, and product and order management.</p>

              </div>
              
            </div>
            
            <p>This eCommerce project was developed with the purpose of developing my full-stack skills, including user authentication, PayPal Payment Integration, and product and order management.</p>
            <h2> Historia del proyecto</h2>
            <h2> Propósito del sitio</h2>
            <p>Este proyecto de eCommerce fue desarrollado con el propósito de mis habilidades full-stack, incluyendo autenticación de usuarios, integración de pagos con PayPal, y gestión de productos y pedidos.</p>
            <h2> Características principales</h2>
            <h2> Tecnologías utilizadas</h2>
            <h2> Retos y aprendizajes</h2>
            <h2> Objetivo del proyecto</h2>
            <h2> Llamada a la acción</h2>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About