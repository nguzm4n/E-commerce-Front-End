import React, { useContext } from 'react'
import { FaDeleteLeft } from "react-icons/fa6";
import { Context } from '../../store/Appcontext';
import { FaSquarePlus } from "react-icons/fa6";
import { FaSquareMinus } from "react-icons/fa6";
import '../Styles/Cart/CartItemBig.css'

const CartItemBig = ({ img, name, quantity, price,id, onClick, decrease, increase }) => {


    const { store, actions } = useContext(Context)


    return (
        <div>
            <div className="card mb-3 mx-3 mt-3 div-cart-item-big" >
                <div className="row ">
                    <div className="col-sm-3 imagen-cart">
                        <img  src={img} className="img-fluid rounded-start img-cart-item-big" alt="..." />
                    </div>
                    <div className="col-sm-5 ">
                        <div className="card-body">
                            <div className='d-flex justify-content-center'>
                            <h5 className="card-title">{name}</h5>
                            </div>
                            <div className='mt-5 d-flex justify-content-center'>
                           <div className='d-flex align-items-center'> <p className="card-text fs-4 mb-0">Quantity </p> </div><div className='ms-2 d-flex align-items-center'><FaSquareMinus size={30} onClick={decrease} className='me-1' /> <p className='mb-0 quantity-number'>{quantity}</p> <FaSquarePlus size={30} onClick={increase} className='ms-1'/></div>
                            </div>
                            
                        </div>
                    </div>
                    <div className="col-sm-4 mt-2 ">
                        <div className='d-flex justify-content-center'>
                       <div className='fs-5'>Delete From Cart  <FaDeleteLeft size={30} onClick={onClick}/></div>  
                       </div>
                       <div className="d-flex justify-content-center mt-5 pb-5">
                       <div className='fs-5'>Price: $ {price}.00</div>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItemBig