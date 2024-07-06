import React, { useContext } from 'react'
import { FaDeleteLeft } from "react-icons/fa6";
import { Context } from '../../store/Appcontext';
import { FaSquarePlus } from "react-icons/fa6";
import { FaSquareMinus } from "react-icons/fa6";

const CartItemBig = ({ img, name, quantity, price,id, onClick, decrease, increase }) => {


    const { store, actions } = useContext(Context)


    return (
        <div>
            <div className="card mb-3 mx-3 mt-3" style={{maxWidth: "1000px"}}>
                <div className="row ">
                    <div className="col-sm-3 imagen-cart">
                        <img style={{maxWidth: "150px"}} src={img} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-sm-5 ">
                        <div className="card-body">
                            <h5 className="card-title">{name}</h5>
                            <div className='mt-5 d-flex'>
                            <p className="card-text fs-5">Quantity x {quantity} </p> <div className='ms-4'><FaSquareMinus size={30} onClick={decrease} /> <FaSquarePlus size={30} onClick={increase}/></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 mt-2" >
                       <div className='fs-5'>Delete From Cart  <FaDeleteLeft size={30} onClick={onClick}/></div>  
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItemBig