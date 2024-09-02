import { Button } from 'bootstrap'
import React, { useState } from 'react'
import Paypal from '../Cart/Paypal'
const PayPalButton = () => {


    const [checkout, setCheckout] = useState(false)
  return (



    <div className=''>
        
       {checkout ? (<Paypal />) : ( <button className='btn btn-success my-2' onClick={() => {setCheckout(true)}}>Payment</button> )}
         </div>
  )
}

export default PayPalButton