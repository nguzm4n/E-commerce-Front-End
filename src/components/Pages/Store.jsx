import React from 'react'
import '../Styles/Store/Store.css'
import { GiGuitarHead } from "react-icons/gi";

const Store = () => {


  return (
    <div>
      <div className='container-fluid d-flex justify-content-center bg-black'>
        <div className="row ">
          <div className="col-md-12 pt-5 pb-5 text-light titulo">   <GiGuitarHead /> |  Guitars | <GiGuitarHead /> </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-1 bg-dark">HOLA
          </div>
          <div className="col-md-10 bg-secondary parrilla">HOLA
          </div>
          <div className="col-md-1 bg-dark">HOLA
          </div>
        </div>
      </div>
    </div>
  )
}

export default Store