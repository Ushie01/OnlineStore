import React, { useEffect, useState } from 'react';

function Signout() {
    const [user, setUser] = useState({});
    console.log(user);
    useEffect(() => {
        const user = JSON.parse(localStorage.removeItem('user'));
        if (user) {
            setUser(user);
        }
    }, [])
    return (
      <>
        {window.location = "/"}
      </>
  )
}

export default Signout;
