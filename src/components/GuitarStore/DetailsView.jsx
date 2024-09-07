import React, { useContext, useEffect } from 'react'
import '../Styles/Store/Store.css'
import { GiGuitarHead } from "react-icons/gi";
import { Context } from '../../store/Appcontext.jsx';
import GuitarCard from './GuitarCard.jsx'
import CardTest from './CardTest.jsx'
import Footer from '../Home/Footer.jsx'
import { useNavigate,useParams } from 'react-router-dom';
import DetailCard from './DetailCard.jsx';


const DetailsView = () => {

  const { store, actions } = useContext(Context)

    return (
        <div>
        <div className='container-fluid d-flex justify-content-center bg-black'>
          <div className="row ">
            <div className="col-md-12 pt-5 pb-5 text-light titulo">   <GiGuitarHead /> |  <span style={{"color": "#ffc107"}}>G</span>uitar Store | <GiGuitarHead /> </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-1 bg-dark">
            </div>
            <div className="col-lg-10 bg-secondary parrilla d-flex justify-content-center cart-container">
            
                <DetailCard
                  id={store.guitarId.guitar.id}
                  img={store.guitarId.guitar.avatar}
                  name={store.guitarId.guitar.name}
                  price={`$${store.guitarId.guitar.price}.00`}
                  description={store.guitarId.guitar.description}
                  stock={store.guitarId.guitar.stock_quantity}
                  onClick={() => { actions.addItem(store.guitarId.guitar.id) }}
                  seeDetails={() => {navigate(`/guitar/${guitar.id}`)}}
                />
             
            
              
            </div>
            <div className="col-lg-1 bg-dark">
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
}

export default DetailsView