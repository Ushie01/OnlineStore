import React from 'react'
import emptyInbox from '../../assets/empty-mail.svg';
import './UserProfile.css';

const Order = () => {
  return (
    <div className='check-out-row' id='inbox'>
      <h1 className='check-out-header'>PROFILE</h1>
      <div className='address-method'>
            <p className='address-header'>Inbox Messages</p>
            <hr />
          <div className=''>
            <img src={emptyInbox} alt={emptyInbox} className="emptyInbox" />
            <p className='emptyInboxP'>You don't have any messages</p>
            <p className='emptyInboxPP'>Here you will be able to see all the messages that we send you. Stay tuned</p>
          </div>
      </div>   
    </div>
  )
}

export default Order;