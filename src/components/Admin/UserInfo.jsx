import React, { useContext } from 'react'
import '../Styles/Orders/OrderCard.css'
import { FaPencil } from "react-icons/fa6";


const UserInfo = ({ id, userId, mail, cancelOrder, quantity, address, name  }) => {




    return (
        <div>
            <div className="row container-fluid d-flex justify-content-center">
                <div className="col-md-10">
                    <h3 className='mt-2'><FaPencil style={{"color": "#ffc107"}}  size={22}/> Details:</h3>
                    <div className="card my-4 rounded-0  border-warning rounded-1 div-item-name mb-5 " >
                        <div className="card-header border-warning">
                            User ID: {userId}
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item border-warning div-item-name">Name: {name}</li>
                            <li className="list-group-item border-warning div-item-name">Mail: {mail} </li>
                            <li className="list-group-item border-warning div-item-name">Address {address}</li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default UserInfo