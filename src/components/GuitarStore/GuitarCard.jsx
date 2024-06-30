import React from 'react'
import '../Styles/Store/GuitarCard.css'

const GuitarCard = ({ img, name, price}) => {
    return (
        <div>
            <div className="card mx-5 mt-5" style={{width: "18rem"}}>
                <img src={img} className="card-img-top mt-4 guitar-img" alt="..." />
                <div className="card-body text-center">
                    <h5 className="card-title guitar-name">{name}</h5>
                    <p className="card-text">{price}</p>
                    <p href="#" className="btn btn-primary " type="button">Add Item to Cart</p>
                </div>
            </div>
        </div>
    )
}

export default GuitarCard