import React from 'react'
import '../Styles/Home/Marcas.css'
import gibsonlogo from '../img/gibsonlogo.jpg'
import ibanez from '../img/ibanezlogo.png'
import fender from '../img/fenderlogo.png'
import prs from '../img/prslogo.png'
import solar from '../img/solarlogo.jpg'
import chapman from '../img/chapmanlogo.jpg'


const Marcas = () => {
    return (
        <div className="container-fluid">
            <div className="row pt-5 ">
                <div className="col-sm-6 d-flex justify-content-end ">
                    <div className="contenedor-marca " >
                        <img src={ibanez} className="card-img-top img-marca" alt="Ibanez" />
                    </div>
                    <div className="contenedor-marca" >
                        <img src={gibsonlogo} className="card-img-top img-marca" alt="Gibson" />
                    </div>
                    <div className="contenedor-marca bg-black" >
                        <img src={fender} className="card-img-top img-marca p-2" alt="Fender" />
                    </div>
                    </div>
                    <div className="col-sm-6 d-flex ">
                    <div className="contenedor-marca bg-black " >
                        <img src={prs} className="card-img-top img-marca" alt="PRS" />
                    </div>
                    <div className="contenedor-marca" >
                        <img src={solar} className="card-img-top img-marca" alt="Ibanez" />
                    </div>
                    <div className="contenedor-marca" >
                        <img src={chapman} className="card-img-top img-marca" alt="Chapman" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Marcas
