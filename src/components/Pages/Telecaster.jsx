import React, { useContext, useEffect } from 'react'
import '../Styles/Store/Store.css'
import { GiGuitarHead } from "react-icons/gi";
import { Context } from '../../store/Appcontext.jsx';
import GuitarCard from '../GuitarStore/GuitarCard.jsx'
import CardTest from '../GuitarStore/CardTest.jsx'
import Footer from '../Home/Footer.jsx'
import { useNavigate, useParams } from 'react-router-dom';


const Store = () => {


  const { store, actions } = useContext(Context)
  const { guitarId } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    actions.getTele()
  }, [])

  return (
    <div>
      <div className='container-fluid d-flex justify-content-center bg-black'>
        <div className="row ">
          <div className="col-md-12 pt-5 pb-5 text-light titulo title-header">   <GiGuitarHead /> |  Telecaster <span style={{"color": "#ffc107"}}>G</span>uitars | <GiGuitarHead /> </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-1 bg-dark">
          </div>
          <div className="col-lg-10 bg-secondary parrilla d-flex flex-wrap">
          
          {store.guitars ? store.guitars.guitars.map((guitar) => (
              <div key={guitar.id} className="col-md-6 col-lg-4 mb-4 d-flex justify-content-center">
                <GuitarCard
                  id={guitar.id}
                  img={guitar.avatar}
                  name={guitar.name}
                  price={`$${guitar.price}.00`}
                  Onclick={() => { actions.addItem(guitar.id) }}
                  seeDetails={() => {navigate(`/guitar/${guitar.id}`)}}
                />
              </div>
            )) : <p>Loading...</p>}
          </div>
          <div className="col-lg-1 bg-dark">
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Store