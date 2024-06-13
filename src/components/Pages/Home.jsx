
import React from 'react'
import Carrusel from '../Home/Carrusel'
import '../Styles/Home/Home.css'
import Marcas from '../Home/Marcas'
import Mostrar from '../Home/Mostrar'




const Home = () => {
  return (
    <div className='custom-body'>
      <div>
        <Marcas />
        <Carrusel />
        <Mostrar />
      </div>
    </div>
  )
}

export default Home