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
          <div className="col-md-10 bg-secondary cart-container">
            <div>
              {!!store.cart.cart && sortedCartItems.map((item) => (
                <CartItemBig
                  key={item.product_id}
                  id={item.product_id}
                  img={item.product_avatar}
                  quantity={item.quantity}
                  name={item.product_name}
                  onClick={() => actions.deleteItem(item.product_id)}
                  decrease={() => { actions.decreaseItem(item.product_id) }}
                  increase={() => { actions.addItem(item.product_id) }}
                />
              ))}
            </div>
            <div>Total</div>
          </div>
          <div className="col-md-1 bg-dark">HOLA</div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Cart;
