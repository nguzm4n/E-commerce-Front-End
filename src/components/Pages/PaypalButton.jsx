import { Button } from 'bootstrap'
import React, { useState } from 'react'
import Paypal from '../Cart/Paypal'
const PayPalButton = () => {


    const [checkout, setCheckout] = useState(false)
  return (



    <div>PayPalButton
        
       {checkout ? (<Paypal />) : ( <button onClick={() => {setCheckout(true)}}>Checkout</button> )}
         </div>
  )
}

export default PayPalButton