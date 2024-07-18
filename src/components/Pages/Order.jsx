import React from 'react'
import { GiGuitarHead } from 'react-icons/gi'


const Order = () => {

  
  return (
    <div>
    <div className='container-fluid d-flex justify-content-center bg-black'>
      <div className="row ">
        <div className="col-md-12 pt-5 pb-5 text-light titulo">   <GiGuitarHead /> |  Your Order | <GiGuitarHead /> </div>
      </div>
    </div>
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-1 bg-dark">
        </div>
        <div className="col-md-10 bg-secondary parrilla">
        <h1>Checkout</h1>
           
      
        </div>
        <div className="col-md-1 bg-dark">
        </div>
      </div>
    </div>
    <Footer />
  </div>
  )
}

export default Order