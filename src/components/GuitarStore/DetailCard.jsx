import React, { useContext, useEffect } from 'react'
import '../Styles/Store/Store.css'
import '../Styles/Store/DetailCard.css'


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
                
                    <p className="card-text mt-3">{description}</p>
                    <p className="card-text fs-4">{price}</p>
                    <p className="card-text">Stock Available : {stock}    </p>
                    <p href="#" className="btn btn-warning  " type="button" onClick={onClick}>Add Item to Cart</p>

                    
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