import React from 'react';
import './UserProfile.css'
import { Outlet, Link } from 'react-router-dom';
// import { Link as Lnk} from 'react-scroll';
import account from '../../assets/account.svg';
import inbox from '../../assets/inbox.svg';
import love from '../../assets/love.svg';
import order from '../../assets/orders.svg';

function UserProfile() {

  return (
    <>
    <div>
        <div className='cash-fluid'>
          <div className='cash-rowRow container'>
            <div className='row'>
              <div className='summaryNav'>

                <Link to="/UserProfile/Account">
                  <button className='btn btn-nav'>
                    <img src={account} alt={account} className='acc' />
                    account
                  </button>
                </Link>
                
                <Link to="/UserProfile/Inbox">
                  <button className='btn btn-nav'>
                    <img src={inbox} alt={inbox} className='acc' />
                    inbox
                  </button>
                </Link>

                <Link to="/UserProfile/Order">
                  <button className='btn btn-nav'>
                    <img src={order} alt={order} className='acc' />
                    order
                  </button>
                </Link>

                <Link to="/UserProfile/SavedItem">
                  <button className='btn btn-nav'>
                    <img src={love} alt={love} className='acc' />
                    savedItems
                  </button>
                </Link>

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
