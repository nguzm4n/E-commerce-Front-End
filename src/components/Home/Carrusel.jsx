import React from 'react';
import '../Styles/Home/Carrusel.css';

const Carrusel = () => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-12 pb-5 div-carousel-container-f'>
                    <div className='div-carousel-container'>
                        <div id="carouselExample" className="carousel slide carousel-fade mt-5" data-bs-ride="carousel" data-bs-interval="4000">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img
                                        src="https://github.com/nguzm4n/E-commerce-Front-End/blob/main/src/components/img/Carrusel/carrusel1.jpg?raw=true"
                                        className="d-block w-100 imagen-carrusel"
                                        alt="..."
                                        loading="lazy"
                                    />
                                </div>
                                <div className="carousel-item">
                                    <img
                                        src="https://github.com/nguzm4n/E-commerce-Front-End/blob/main/src/components/img/Carrusel/carrusel3.jpg?raw=true"
                                        className="d-block w-100 imagen-carrusel"
                                        alt="..."
                                        loading="lazy"
                                    />
                                </div>
                                <div className="carousel-item">
                                    <img
                                        src="https://github.com/nguzm4n/E-commerce-Front-End/blob/main/src/components/img/Carrusel/carrusel2.jpg?raw=true"
                                        className="d-block w-100 imagen-carrusel"
                                        alt="..."
                                        loading="lazy"
                                    />
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
                </div>
            </div>
        </div>
    );
};

export default Carrusel;
