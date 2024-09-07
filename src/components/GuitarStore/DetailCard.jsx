import React, { useContext, useEffect } from 'react'
import '../Styles/Store/Store.css'
import { GiGuitarHead } from "react-icons/gi";
import { Context } from '../../store/Appcontext.jsx';
import GuitarCard from './GuitarCard.jsx'
import CardTest from './CardTest.jsx'
import Footer from '../Home/Footer.jsx'
import { useNavigate, useParams } from 'react-router-dom';
import '../Styles/Store/DetailCard.css'
import Rating from './Rating.jsx';

const DetailCard = ({ img, name, description, price, stock, buy, onClick }) => {
  return (
    <div>
      <div className='container-fluid my-5 d-flex justify-content-center  '>
        <div className="row ">
          <div className=' col-md-12  '>
            <div className="card mb-6 rounded-0 detail-card " style={{ "maxWidth": "1000px" }}>
              <div className="row g-0 detail-card">
                <div className="col-lg-4 py-1">
                  <img src={img} className="  detail-card-img rounded-1 px-1" alt="Guitar" />
                </div>
                <div className="col-lg-8 mt-4 ">
                  <div className="card-body ">
                    <h5 className="card-title">{name}</h5>
                    {/* <p>Características:</p>
                      <ul>
                      <li>Cuerpo de aliso ligero y resistente.</li>
                      <li>Mástil de arce con diapasón de palo de rosa/arce.</li>
                      <li>Configuración de pastillas SSS (3 pastillas de bobina simple).</li>
                      <li>Puente de trémolo clásico para efectos de vibrato.</li>
                      <li> Acabado brillante en una variedad de colores icónicos.</li>

                      <li>Ideal para músicos que buscan un sonido auténtico y una presencia escénica inigualable. ¡Haz tuya esta Stratocaster y lleva tu música a nuevas alturas!</li>
                      </ul> */}
                    <p className="card-text mt-3">{description}</p>
                    <p className="card-text fs-4">{price}</p>
                    <p className="card-text">Stock Available : {stock}    </p>
                    <p href="#" className="btn btn-warning  " type="button" onClick={onClick}>Add Item to Cart</p>

                    {/* <p className="card-text mt-3">{description}</p> */}
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