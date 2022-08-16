import React, { useEffect, useState } from 'react';
import edit from '../../assets/edit.svg'

const Account = () => {
  const [userDetails, setUserDetails] = useState([]);

  useEffect(() => {
    const userDetails = localStorage.getItem('user');
    const user = JSON.parse(userDetails);
    if (user) {
      setUserDetails(user);
    }
  }, []);
  return (
    <div className='check-out-row' id='account'>
      <h1 className='check-out-header'>PROFILE</h1>
      <div className='address-method'>
        <p className='address-header'>Account Overview</p>
        <div className='profile'>
          <p className='userDetailsName'>{userDetails.name}</p>
          <p className='userDetailsemail'>{userDetails.email}</p>
        </div>
        <div className='profile'>
          <header className='accountDet'>
            <p className='accountDetails'>Change Password</p>
            <img src={edit} alt={edit} />

          </header>
        </div>
      </div>   
    </div>
  )
}

export default Account
