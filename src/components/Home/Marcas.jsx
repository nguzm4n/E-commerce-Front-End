import React from 'react'
import '../Styles/Home/Marcas.css'
import gibsonlogo from '../img/gibsonlogo.jpg'
import ibanez from '../img/ibanez-logo.png'

const Marcas = () => {
    return (
        <div>
            <div className="container-fluid">
                <div className="row d-flex justify-content-center pt-5">
                    <div class="contenedor-marca" style={{width: "18rem"}}>
                        <img src={ibanez} class="card-img-top img-marca" alt="..." />
                        <div class="card-body">
                        </div>
                    </div>
                    <div class="contenedor-marca" style={{width: "18rem"}}>
                        <img src={gibsonlogo} class="card-img-top img-marca" alt="..." />
                        <div class="card-body">
                        </div>
                    </div>
                    <div class="contenedor-marca" style={{width: "18rem"}}>
                        <img src={ibanez} class="card-img-top img-marca" alt="..." />
                        <div class="card-body">
                        </div>
                    </div>
                    <div class="contenedor-marca" style={{width: "18rem"}}>
                        <img src={gibsonlogo} class="card-img-top img-marca" alt="..." />
                        <div class="card-body">
                        </div>
                    </div>
                    <div class="contenedor-marca" style={{width: "18rem"}}>
                        <img src={ibanez} class="card-img-top img-marca" alt="..." />
                        <div class="card-body">
                        </div>
                    </div>
                    <div class="contenedor-marca" style={{width: "18rem"}}>
                        <img src={gibsonlogo} class="card-img-top img-marca" alt="..." />
                        <div class="card-body">
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Marcas