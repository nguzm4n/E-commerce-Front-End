import React, { useContext } from 'react'
import { FaDeleteLeft } from "react-icons/fa6";
import { Context } from '../../store/Appcontext';
import { FaSquarePlus } from "react-icons/fa6";
import { FaSquareMinus } from "react-icons/fa6";
import { MdDeleteForever } from "react-icons/md";
import '../Styles/Cart/CartItemBig.css'

const CartItemBig = ({ img, name, quantity, price,id, onClick, decrease, increase }) => {


    const { store, actions } = useContext(Context)


    return (
        <div className=''>
            <div className="card mb-3 mx-3 mt-3 container border-warning rounded-0 div-cart-item-big " >
                <div className="row div-cart-item-big ">
                    <div className="col-sm-3 imagen-cart mt-2 ">
                        <img  src={img} className="img-fluid rounded-1 img-cart-item-big" alt="..." />
                    </div>
                    <div className="col-sm-5 ">
                        <div className="card-body">
                            <div className='d-flex justify-content-center cart-div-text'>
                            <h5 className="card-title fs-2 fw-medium cart-div-text">{name}</h5>
                            </div>
                            <div className='mt-5 d-flex justify-content-center pt-5'>
                           <div className='d-flex align-items-center'> <p className="card-text fs-5 mb-0 cart-div-text">Quantity </p> </div><div className='ms-2 d-flex align-items-center'><FaSquareMinus size={25} onClick={decrease} className='me-1 fa-square-minus cart-div-text' /> <p className='mb-0 quantity-number fs-5 cart-div-text'>{quantity}</p> <FaSquarePlus  size={25} onClick={increase} className='ms-1 fa-square-plus cart-div-text'/></div>
                            </div>
                            
                        </div>
                    </div>
                    <div className="col-sm-4 mt-2 ">
                        <div className='d-flex justify-content-center pt-2'>
                       <div className='fs-5 cart-div-text'>Delete From Cart  <MdDeleteForever className='fa-delete-left' size={30} onClick={onClick}/></div>  
                       </div>
                       <div className="d-flex justify-content-center mt-5 pb-5">
                       <div className='fs-5 pt-5 mt-4 cart-div-text'>Price: $ {price}.00</div>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItemBig