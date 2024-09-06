import '../Styles/Orders/OrderCard.css'

const OrderNameItem = ({  quantity, name }) => {

    return (
        <div>
            <div className="row container-fluid d-flex justify-content-center">
                <div className="col-md-10 mt-5 ">
                    <h3>Order Items:</h3>
                    <div className="card my-1 rounded-0  rounded-1 div-cart-item-big border-warning" >
                        <ul className="list-group list-group-flush ">
                        <li className="list-group-item  div-cart-item-big border-warning">Product Name: {name}</li>
                <li className="list-group-item div-cart-item-big border-warning">Product Quantity: {quantity}</li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
           
       

    )
}

export default OrderNameItem