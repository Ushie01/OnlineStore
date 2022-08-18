import React from 'react';
// import { Link } from 'react-bootstrap';
import { Outlet, Link } from 'react-router-dom';
// import order from '../../assets/order.svg'

const Order = () => {
  return (
    <div className='check-out-row' id='order'>
      <h1 className='check-out-header'>PROFILE</h1>
      <div className='address-method'>
            <p className='address-header'>Orders</p>
          <hr />
          <div className='orderOpenandClose'>
            <Link to="/UserProfile/Order/OpenOrder">
              <button className='btn btn-nav'>
                open order
              </button>
            </Link>
            <Link to="/UserProfile/Order/ClosedOrder">
              <button className='btn btn-nav'>
                closed order
              </button>
            </Link>
          </div>
        <Outlet />
      </div>   
    </div>
  )
}

export default Order
