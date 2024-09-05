import React, { useContext } from 'react'
import '../Styles/Store/GuitarCard.css'




const GuitarCard = ({ img, name, price , Onclick}) => {




    return (
        <>
            <div className="card mx-5 mt-5 border-dark rounded-1" style={{width: "18rem"}}>
                <img src={img} className="card-img-top mt-4 guitar-img" alt="..." />
                <div className="card-body text-center">
                    <h5 className="card-title guitar-name fw-semibold fs-4 ">{name}</h5>
                    <p className="card-text  fs-5 fw-medium">{price}</p>
                    <p href="#" className="btn btn-warning border-warning-subtle " type="button" onClick={Onclick}>Add Item to Cart</p>
                </div>
            </div>
        </>
    )
}

export default GuitarCard