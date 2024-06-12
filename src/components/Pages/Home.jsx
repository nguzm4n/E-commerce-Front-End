
import React from 'react'
import Carrusel from '../Home/Carrusel'
import '../Styles/Home/Home.css'
import Marcas from '../Home/Marcas'


const Home = () => {
  return (
    <div className='custom-body'>
      <div>
        <Marcas />
        <Carrusel />

      </div>
    </div>
  )
}

export default Home