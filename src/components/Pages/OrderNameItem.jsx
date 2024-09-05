import '../Styles/Orders/OrderCard.css'




const OrderNameItem = ({ id, quantity, name }) => {




    return (
        <div>
            <div className="row container-fluid d-flex justify-content-center">
                <div className="col-md-10 ">
                    <div className="card my-3 rounded-0  rounded-1 div-cart-item-big" >

                        <ul className="list-group list-group-flush ">
                        <li className="list-group-item  div-cart-item-big">Product Name: {name}</li>
                <li className="list-group-item div-cart-item-big">Product Quantity: {quantity}</li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
           
       

    )
}

export default OrderNameItem