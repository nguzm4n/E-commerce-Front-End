import React, { useContext, useEffect } from 'react'
import '../Styles/Store/Store.css'
import { GiGuitarHead } from "react-icons/gi";
import { Context } from '../../store/Appcontext';
import GuitarCard from '../GuitarStore/GuitarCard.jsx'
import CardTest from '../GuitarStore/CardTest.jsx'
import Footer from '../Home/Footer.jsx'


const Store = () => {


  const { store, actions } = useContext(Context)

  useEffect(() => {
    actions.getPrs()
  }, [])

  return (
    <div>
      <div className='container-fluid d-flex justify-content-center bg-black'>
        <div className="row ">
          <div className="col-md-12 pt-5 pb-5 text-light titulo title-header">   <GiGuitarHead /> |  Guitars | <GiGuitarHead /> </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-1 bg-dark">HOLA
          </div>
          <div className="col-md-10 bg-secondary parrilla d-flex flex-wrap">
          
          {store.guitars ? store.guitars.guitars.map((guitar) => (
             <div key={guitar.id} className="col-md-4 mb-4"> 
             <GuitarCard
               id={guitar.id}
               img={guitar.avatar}
               name={guitar.name}
               price={`$${guitar.price}.00`}
               Onclick={() => {actions.addItem(guitar.id)}}
             />
           </div>
            )) : <p>Loading...</p>}
          </div>
          <div className="col-md-1 bg-dark">HOLA
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Store