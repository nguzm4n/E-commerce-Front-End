
import React from 'react'
import Carrusel from '../Home/Carrusel'
import '../Styles/Home/Home.css'
import Marcas from '../Home/Marcas'
import Mostrar from '../Home/Mostrar'
import Footer from '../Home/Footer'




const Home = () => {
  return (
    <div className='custom-body'>
      <div>
        <Carrusel />
        <Mostrar />
        <Footer />
      </div>
    </div>
  )
}

export default Home