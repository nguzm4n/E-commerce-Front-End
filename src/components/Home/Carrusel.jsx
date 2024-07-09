import React from 'react'
import '../Styles/Home/Carrusel.css'


const Carrusel = () => {
    return (
        <div className='container'>
            <div className='row '>
        <div className='col-md-12  pb-5 bg-secondary  '>
            <div id="carouselExample" className="carousel contenedor-carrusel slide mt-5 " data-bs-ride="carousel" data-bs-interval="4000">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://www.txirula.com/modules/dbblog/views/img/post/Choosing-the-Best-Guitar-Body-Style-Featured-Image.jpg" className="d-block w-60 imagen-carrusel" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://i.multisononline.com/blog/wp-content/uploads/2024/01/guitarras-electricas-historicas-1024x682.jpg" className="d-block w-60 imagen-carrusel" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwallpapercave.com%2Fwp%2FgB1pDaO.jpg&f=1&nofb=1&ipt=fcdf47fdddab502fb50a60748e0f04a212bbb3db01936ff833fd21b4881f2aed&ipo=images" className="d-block w-60 imagen-carrusel" alt="..." />
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
    )
}

export default Carrusel