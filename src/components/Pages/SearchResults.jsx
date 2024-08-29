import React, { useContext} from 'react'
import { Context } from '../../store/Appcontext.jsx';


const SearchResults = () => {
    const { store, actions } = useContext(Context)


  
    return (
      <div>
        <div className='container-fluid d-flex justify-content-center bg-black'>
          <div className="row ">
            <div className="col-md-12 pt-5 pb-5 text-light titulo">   <GiGuitarHead /> |  Guitars  | <GiGuitarHead /> </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-1 bg-dark">
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
            <div className="col-md-1 bg-dark">
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
}

export default SearchResults