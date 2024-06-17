import React from 'react'

const GuitarCard = ({img, name, price}) => {
    return (
        <div>
            <div className="card" style="width: 18rem;">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{price}</p>
                    <a href="#" className="btn btn-primary">Add to cart</a>
                </div>
            </div>
        </div>
    )
}

export default GuitarCard