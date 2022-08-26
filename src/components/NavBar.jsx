import React from 'react';
// import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useUser, useCart } from './Hooks/useUser';
import 'bootstrap/dist/css/bootstrap.css';
import logo from '../assets/logoEup.svg';
// import call from '../assets/call.svg';
import menu from '../assets/menu_black.svg'
import shopping from '../assets/shopping_cart.svg';
import whatsapp from '../assets/whatsapp.svg';
import NavDrop from './NavDrop/NavDrop';
import account from '../assets/account.svg'
import inbox from '../assets/inbox.svg';
import order from '../assets/orders.svg';
import love from '../assets/love.svg';

function Navbar() {
  const { user } = useUser();
  const { userCart } = useCart();
  
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link to="/"><img src={logo} width="120px" className="mr-2" alt=''/></Link>
            <div className="navbar-toggler" style={{color:"black"}} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
              <Link to="/Cart" className='nan'><img src={shopping} alt='' />
                  <span className="dropbtn badge-pill badge-secondary m-2">
                    {
                      !userCart.length ? 0 : userCart.length
                    }
                  </span>
              </Link>
              <Link to="/"><img src={menu} alt={menu} navbar-toggler-icon="true" /></Link>
          </div>
          <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
              <img src={logo} width="120px" className="mr-2" alt=''/>
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <hr />
                  <div className='nav'>
                    <Link to="/" className='nan'>Home</Link>
                    <Link to="/New" className='nan'>Brand</Link>
                    <Link to="/About" className='nan'>About-Us</Link>
                  </div>
                  <hr />
                <div className='d-flex ms-auto mr-2' >
                    {user.isAdmin 
                    ?
                    <div className='AdminNan' > 
                      <NavDrop />
                    </div> 
                    : ""}
                    <Link to="/Cart" className='nan'><img src={shopping} alt=''/>
                        <span className="dropbtn badge-pill badge-secondary m-2">
                          {
                            !userCart.length ? "0" : userCart.length
                          }
                        </span>
                    </Link>
                    {/* <Link to="/Contact-us" className='nan'><img src={call} alt=''/></Link> */}
                  {!user.name ? (
                  <React.Fragment>
                    <Link to='Signin' className='nan'>Login</Link>
                    <Link to='/Signup' className='nan'>Register</Link>
                  </React.Fragment>
                  ) : (
                  <React.Fragment>
                      <div className="dropdown dropdownprofile">
                          <div className="btn-default dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown"aria-expanded="false">
                              <img src={account} alt={account} /><span className='userProfile'>{`Hi, ${user.name}`}</span>
                          </div>
                          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                              <Link to="/UserProfile" className="dropdown-item nan" ><img src={account} alt={account} />My Account</Link>
                               <hr />
                              <Link to="/" className="dropdown-item nan" ><img src={order} alt={order} />Orders</Link>
                              <hr />
                              <Link to="/" className="dropdown-item nan" ><img src={inbox} alt={inbox} />Index</Link>
                              <hr />
                              <Link to='/' className='dropdown-item nan'><img src={love} alt={love} />Saved Item</Link>
                              <hr />
                              <Link to="/Signout" className='dropdown-item nan'>Sign-Out</Link>
                          </div>
                      </div>
                     </React.Fragment>
                    )}
                    <Link to="/Whatsapp" className='nan'><img src={whatsapp} alt=''/></Link>
                    <></>
                </div>
                <hr />
            </div>
          </div>
        </div>
      </nav>
      <hr />
    </>
  );
}

export default Navbar;



              // <UserContext.Consumer>
              //   {
              //     ([user]) => (
              //     <span className="dropbtn badge-pill badge-secondary m-2">{user.name}</span>
              //     )
              //   }
              // </UserContext.Consumer>  