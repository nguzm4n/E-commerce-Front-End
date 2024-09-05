




const OrderNameItem = ({ id, quantity, name }) => {




    return (
        <div>
            <div className="row container-fluid d-flex justify-content-center">
                <div className="col-md-10">
                    <div className="card my-3" >

                        <ul className="list-group list-group-flush">
                        <li className="list-group-item">Product Name: {name}</li>
                <li className="list-group-item">Product Quantity: {quantity}</li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
           
       

    )
}

export default OrderNameItem