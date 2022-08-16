import React from 'react';
import './UserProfile.css'
import { Link, Outlet } from 'react-router-dom';
import { Link as Lnk} from 'react-scroll';
import account from '../../assets/account.svg';
import inbox from '../../assets/inbox.svg';
import love from '../../assets/love.svg';
import order from '../../assets/orders.svg';

function UserProfile() {

  return (
    <>
    <div>
        <div className='cash-fluid'>
        <div className='cash-row container'>
            <div className='summary-row'>
              <h1 className='summary-header'>DASK</h1>
              <div className='order-method'>
                
                <h3>
                  <Lnk to="account"
                    spy={true}
                    smooth={true}
                    offset={-40}
                    duration={100}>
                    <Link to='/UserProfile/Account'
                      className='useraccount nan'
                    >
                      <img src={account} alt={account} className="useraccount-image" />
                      My Account
                    </Link>
                  </Lnk>
                </h3>
                <hr />

                <h3>
                  <Lnk to="inbox"
                    spy={true}
                    smooth={true}
                    offset={-40}
                    duration={100}>
                    <Link to='/UserProfile/Inbox'
                      className='useraccount nan'
                    >
                      <img src={inbox} alt={inbox} className="useraccount-image"/>
                      Inbox
                    </Link>
                  </Lnk>
                </h3>
                <hr />

                <h3>
                  <Lnk to="order"
                    spy={true}
                    smooth={true}
                    offset={-40}
                    duration={100}>
                    <Link to='/UserProfile/Order'
                      className='useraccount nan'
                    >
                      <img src={order} alt={order} className="useraccount-image"/>
                      Order
                    </Link>
                  </Lnk>
                </h3>
                <hr />

                <h3>
                  <Lnk to="savedItem"
                    spy={true}
                    smooth={true}
                    offset={-40}
                    duration={100}>
                    <Link to='/UserProfile/SavedItem'
                      className='useraccount nan'
                    >
                      <img src={love} alt={love} className="useraccount-image"/>
                      Saved Item
                    </Link>
                  </Lnk>
                </h3>
              
                  <hr />
                  <div>
                </div>
              </div>
            </div>
            
          <Outlet />
      
          </div>
        </div>
    </div>
      <hr />
    </>
  )
}

export default UserProfile;
