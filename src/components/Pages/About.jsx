
import React from 'react'

import '../Styles/Home/Home.css'
import Mostrar from '../Home/Mostrar'
import Footer from '../Home/Footer'
import { GiGuitarHead } from 'react-icons/gi'
import { IoDocumentText } from "react-icons/io5";



const About = () => {
  return (
    <div>
    <div className='container-fluid d-flex justify-content-center bg-black'>
      <div className="row ">
        <div className="col-md-12 pt-5 pb-5 text-light titulo">    <span style={{"color": "#ffc107"}}>A</span>bout This <span style={{"color": "#ffc107"}}>W</span>ebsite  <IoDocumentText /></div>
      </div>
    </div>
    <div className="container-fluid">
      <div className="row">
        <h2> Historia del proyecto</h2>
        <h2> Propósito del sitio</h2>
        <p>Este proyecto de eCommerce fue desarrollado para demostrar mis habilidades full-stack, incluyendo autenticación de usuarios, integración de pagos con PayPal, y gestión de productos y pedidos.</p>
        <h2> Características principales</h2>
        <h2> Tecnologías utilizadas</h2>
        <h2> Retos y aprendizajes</h2>
        <h2> Objetivo del proyecto</h2>
        <h2> Llamada a la acción</h2>

      </div>
    </div>
    <Footer />
  </div>
  )
}

export default About