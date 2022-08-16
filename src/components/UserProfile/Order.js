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
            <div>
              <Link to="/UserProfile/Order/OpenOrder" className='closedOrder'>OPEN ORDER(0)</Link>
            </div>
            <div>
              <Link to='/UserProfile/Order/ClosedOrder' className='closedOrder'>CLOSED ORDER(0)</Link>
            </div>
          </div>
        <Outlet />
      </div>   
    </div>
  )
}

export default Order
