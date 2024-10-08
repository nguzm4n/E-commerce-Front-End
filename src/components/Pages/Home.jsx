
import React from 'react'
import Carrusel from '../Home/Carrusel'
import '../Styles/Home/Home.css'
import Mostrar from '../Home/Mostrar'
import Footer from '../Home/Footer'
import { GiGuitarHead } from 'react-icons/gi'




const Home = () => {
  return (
    <div>
    <div className='container-fluid d-flex justify-content-center bg-black'>
      <div className="row ">
        <div className="col-md-12 pt-5 pb-5 text-light titulo title-header">   <GiGuitarHead /> |  <span style={{"color": "#ffc107"}}>G</span>uitar Store |  <GiGuitarHead /> </div>
      </div>
    </div>
    <div className="container-fluid">
      <div className="row">
        <Carrusel />
        <Mostrar />
      </div>
    </div>
    <Footer />
  </div>
  )
}

export default Home