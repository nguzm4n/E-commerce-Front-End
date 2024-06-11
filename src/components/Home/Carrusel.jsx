import React from 'react'
import '../Styles/Home/Carrusel.css'


const Carrusel = () => {
    return (
        <div className='contenedor-carrusel '>
            <div id="carouselExample" className="carousel slide mt-5" data-bs-ride="carousel" data-bs-interval="4000">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://www.txirula.com/modules/dbblog/views/img/post/Choosing-the-Best-Guitar-Body-Style-Featured-Image.jpg" className="d-block w-60 imagen-carrusel" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://i.multisononline.com/blog/wp-content/uploads/2024/01/guitarras-electricas-historicas-1024x682.jpg" className="d-block w-60 imagen-carrusel" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://www.txirula.com/modules/dbblog/views/img/post/Best-Electric-Guitar-Brands-Featured-Image.jpg" className="d-block w-60 imagen-carrusel" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Carrusel