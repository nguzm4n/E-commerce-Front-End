import React, { useContext, useEffect } from 'react'
import '../Styles/Store/Store.css'
import { GiGuitarHead } from "react-icons/gi";
import { Context } from '../../store/Appcontext.jsx';
import GuitarCard from './GuitarCard.jsx'
import CardTest from './CardTest.jsx'
import Footer from '../Home/Footer.jsx'
import { useNavigate, useParams } from 'react-router-dom';


const DetailCard = ({img, name,  description, price, stock, buy}) => {
  return (
    <div>
      <div className='container-fluid my-5 d-flex justify-content-center  '>
        <div className="row ">
            <div className=' col-md-12 '>
        <div className="card mb-6 rounded-0" style={{"max-width": "1000px"}}>
            <div className="row g-0">
              <div className="col-md-4">
                <img src={img} className="img-fluid rounded-start" alt="Guitar" />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{name}</h5>
                  <p className="card-text">{description}</p>
                  <p className="card-text">{price}</p>
                  <p className="card-text">{stock}</p>
                  
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>

    
    </div>
  )
}

export default DetailCard