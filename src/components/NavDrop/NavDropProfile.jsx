import React from 'react';
import { Link } from 'react-router-dom';
import account from '../../assets/account.svg';
import order from '../../assets/orders.svg';
import inbox from '../../assets/inbox.svg';

function NavDrop() {
    const style = {
        textDecoration: "none",
        fontSize: "16px",
        color: "#000",
        fontWeight: "600"
    }
return (
    <div>
        <div className="dropdown">
            <ul className="nan btn-default dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false" style={style}>
                <img src={account} alt={account} />
            </ul>
            <li className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <Link to="/Admin/Orderlist" className="dropdown-item nan" ><img src={account} alt={account} />My Account</Link>
                <Link to="/Admin/Productslist" className="dropdown-item nan" ><img src={order} alt={order} />Orders</Link>
                <Link to="/Admin/Userlist" className="dropdown-item nan" ><img src={inbox} alt={inbox} />Index</Link>
            </li>
        </div>
    </div>
)
}

export default NavDrop
                                                                                                                                     