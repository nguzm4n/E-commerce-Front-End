




const OrderNameItem = ({ id, quantity, name }) => {




    return (
        <div>
            <div className="row container-fluid d-flex justify-content-center">
                <div className="col-md-10 ">
                    <div className="card my-3 rounded-0 border-black rounded-1 " >

                        <ul className="list-group list-group-flush border-black">
                        <li className="list-group-item border-black">Product Name: {name}</li>
                <li className="list-group-item">Product Quantity: {quantity}</li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
           
       

    )
}

export default OrderNameItem