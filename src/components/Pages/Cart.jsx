import React, { useContext, useEffect } from 'react'
import Footer from '../Home/Footer'
import { IoMdCart } from "react-icons/io";
import { Context } from '../../store/Appcontext';
import '../Styles/Cart/Cart.css'
import CartItemBig from '../Cart/CartItemBig';

const Cart = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getCart();
  }, []);

  const sortedCartItems = store.cart.cart ? [...store.cart.cart].sort((a, b) => a.product_id - b.product_id) : [];
  const total = sortedCartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);


  return (
    <div>
      <div className='container-fluid d-flex justify-content-center bg-black'>
        <div className="row">
          <div className="col-md-12 pt-5 pb-5 text-light titulo">
            Your Cart! <IoMdCart />
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-1 bg-dark">Hello</div>
          <div className="col-md-10 bg-secondary cart-container ">
            <div className=''>
              {!!store.cart.cart && sortedCartItems.map((item) => (
                 <div className=' d-flex justify-content-center w-100 item-cart-big' key={item.product_id}>
                <CartItemBig
                  
                  id={item.product_id}
                  img={item.product_avatar}
                  quantity={item.quantity}
                  name={item.product_name}
                  price={item.price * item.quantity}
                  onClick={() => actions.deleteItem(item.product_id)}
                  decrease={() => { actions.decreaseItem(item.product_id) }}
                  increase={() => { actions.addItem(item.product_id) }}
                />
                </div>
              ))}
            </div>
            <div className='text-center fs-3 py-5'>Total: {`${total.toFixed(2)}`}</div> 
          </div>
          <div className="col-md-1 bg-dark"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Cart;
