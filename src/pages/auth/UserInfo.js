import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  useLocation,
  useAddress,
  useCart,
  usePrice,
  useUser,
  successToast, failedToast
} from '../../components/Hooks/useUser';
import { flutterWave, postOrder } from '../../helpers/api';
import Naira from 'react-naira';
import mark from '../../assets/mark.svg';
import flutter from '../../assets/Flutterwave.png';
import whatsapp from '../../assets/whatsapp.svg';
import Loader from '../../components/Loader';
import './UserInfo.css'
// import { toast } from 'react-toastify';


function UserInfo() {
  const { state, city, setStateId } = useLocation();
  const { user } = useUser();
  const { userAddress } = useAddress();
  const { userPrice } = usePrice();
  const { userCart } = useCart();
  const [phonenumber, setPhonenumber] = useState('');
  const [address, setAddress] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [region, setRegion] = useState('');
  const [lg, setLg] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);


  const handleState = (e) => {
    const getStateId = e.target.value;
    setStateId(getStateId)
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    const values = {
      phonenumber,
      address,
      postalCode,
      region,
      lg
    }
    console.log(values);
    localStorage.setItem('userAddress', JSON.stringify(values));
    window.location = '/UserInfo'
  }

  
  const onSubmit = async () => {
    const data = {
      shippingAddress: {
        address: userAddress.address,
        city: userAddress.lg,
        postalCode: userAddress.postalCode,
        country: userAddress.region
      },
      orderItems : userCart,
      paymentMethod: flutter,
      itemsPrice: userPrice.add,
      totalPrice: userPrice.value
    };
    const order = await postOrder(data);


    const flutterWaveData = {
      tx_ref: order.createdOrder._id,
      amount: order.createdOrder.totalPrice,
      currency: "NGN",
      redirect_url: "http://localhost:3000/PaymentStatus",
      meta: {
          consumer_id: order.createdOrder.user,
          consumer_mac: order.createdOrder.user
      },
      customer: {
          email: user.email,
          phonenumber: userAddress.phonenumber,
          name: user.name,
      },
      customizations: {
          title: "Euphorya Brand",
          logo: "http://www.piedpiper.com/app/themes/joystick-v27/images/logo.png"
      }
    }


    const res = await flutterWave(flutterWaveData);
    console.log(res);


    if (res) {
      successToast();
      window.location = res.data.link;
    } else {
      failedToast();
      return window.location = '/Userinfo';
    }


    setIsSubmitted(true);
    if (isSubmitted) return <Loader />
  }

   
  return (
    <div>
        <div className='cash-fluid'>
          <div className='cash-row container'>
            <div className='check-out-row'>
              <h1 className='check-out-header'>CHECKOUT</h1>
              <div className='address-method'>
                {
                userAddress.address ?
                    <>
                      <p className='address-header'>
                        <img src={mark} alt={mark} />1. ADDRESS DETAILS
                      </p>
                        <hr />
                        <header>
                          <div>
                            <p className='firstName'>{user.name}</p>
                            <h3>{userAddress.phonenumber}</h3>
                            <h3>{user.email}</h3>
                            <h3>{userAddress.address}</h3>
                          </div>
                          <p className='Change' type="button" onClick={(e) => {handleSubmit(e)}}>CHANGE</p>
                        </header>
                      </>
                  : 
                  <>
                   <p className='address-header'>1. ADDRESS DETAILS</p>
                  <hr />
                 <form>
                    <div className='row'>
                      <div className="col-md-12 form-input">
                        <label className="form-label">Phone Number*</label>
                        <input
                          name='address' 
                          value={phonenumber}
                          onChange={(e) => setPhonenumber(e.target.value)}
                          id='address-input'
                          type="number" 
                          placeholder='Phone Number'
                          className="form-control" 
                          required 
                        />
                      </div>
                    </div>

                    <div className='row'>
                      <div className="col-md-12 form-input">
                        <label className="form-label">Address*</label>
                        <input
                          name='address' 
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                          id='address-input'
                          type="text" 
                          placeholder='Street Name/ Building/ Apartment No. /Floor.'
                          className="form-control" 
                          required 
                        />
                      </div>
                    </div>

                    <div className='row'>
                      <div className="col-md-12 form-input">
                        <label className="form-label">Postal Code*</label>
                        <input
                          name='address' 
                          value={postalCode}
                          onChange={(e) => setPostalCode(e.target.value)}
                          id='address-input'
                          type="number" 
                          placeholder='000000'
                          className="form-control" 
                          required 
                        />
                      </div>
                    </div>
                    
                    <div className='row'>
                      <div className='col-md-12 form-input'>
                        <label className="form-label">State/Region*</label>
                          <select className='form-select' 
                                name='region'  
                                value={region}
                                onClick={(e) => handleState(e)} 
                                onChange={(e) => setRegion(e.target.value)}
                                required
                              >
                              <option>Please Select..</option>
                              {state?.map((value, index) => {
                               return <option 
                                        key={index} 
                                        value={value.id} 
                                        required
                                        >
                                        {value.name}
                                      </option> })}
                          </select>
                      </div>
                    </div>
                    
                    <div className='row'>
                      <div className='col-md-12 form-input'>
                        <label className="form-label">City*</label>
                          <select className='form-select' 
                                name='region'  
                                value={lg}
                                onChange={(e) => setLg(e.target.value)}
                                required
                              >
                              {city?.lgas?.map((value, index) => {
                               return <option 
                                        key={index} 
                                        value={value.id} 
                                        required
                                        >
                                        {value}
                                      </option> })}
                          </select>
                      </div>
                    </div>
                    
                    <div className='row'>
                      <button id="saveButton" onClick={(e) => {handleSubmit(e)}}> SAVE AND CONTINUE  </button>
                    </div>
                 </form>
                </>
                }
               
              </div>   
                                                                                                                                                                                         
              <div className='address-method payment-method'>
              {
                userAddress.address ?
                <>
                  <p className='address-header'><img src={mark} alt={mark} style={{color:"green"}} /> 2. DELIVERY METHOD</p>
                  <hr />
                  <input type="radio" className="fav_language" value="HTML" />
                  <label htmlFor="html" className='radioLabel'> Door Delivery</label><br />
                  <h3 className='radioLabel'>Delivered between 
                  <span className='deliverySpan'>Thursday 7 Jul</span> and
                  <span> Monday 11 Jul</span> for <span className='spanAmount'>#3,000.00</span></h3>
                </>
                : 
                <>
                  <p className='address-header'> 2. DELIVERY METHOD</p>
                  <hr />
                </>
              }
              </div>
              
              <div className='address-method payment-method'>
              {
                userAddress.address ?
              <>
                <p className='address-header'><img src={mark} alt={mark} style={{color:"green"}} /> 3. PAYMENT METHOD</p>
                <hr />
                <div className='header-payment'>
                   <header >
                      <p className='totaltopay'>TOTAL TO PAY</p>
                      <p className='totaltosum'><Naira>{userPrice.add}</Naira></p>
                    </header>
                </div>
                <div>
                    <header >
                      <div>
                        <input type="radio" name="payment"/>
                        <label className='totaltopay'>Pay With Flutterwave</label>
                      </div>
                      <img src={flutter} alt={flutter} className="mcvisa" />
                    </header>
                    <button id="saveButton" onClick={(e) => onSubmit(e)}> PAY NOW: <Naira>{userPrice.add}</Naira></button>
                    
                </div> 
              </>
                : 
              <>
                <p className='address-header'> 3. PAYMENT METHOD</p>
                <hr />
              </>
              }
              </div>
            </div>
            
            <div className='summary-row'>
              <h1 className='summary-header'>SUMMARY</h1>
              <div className='order-method'>
              <p className='address-head'>{`YOUR ORDER (${userCart.length} userPrice)`}</p>
                <hr />
                {userCart && userCart.map((value, index) => {
                  return <header key={index}>
                            <img src={`http://store-betta.herokuapp.com${value.image}`} 
                                alt={value.image} 
                                className='summary-Image' 
                            />
                            <div className='summary-Body'>
                              <p className='value-name'>{value.name}</p>
                              <p className='value-price'><Naira>{value.price}</Naira></p>
                              <p className='value-quantity'>{`Qty: ${value.qty}`}</p>
                            </div>
                        </header>
                  })}
                  <hr />
                  <div>
                    <header>
                      <p className='sub-total'>Subtotal</p>
                      <p className='sub-total'><Naira>{userPrice.add}</Naira></p>
                    </header>
                    <header>
                      <p className='sub-total'>Delivery</p>
                      <p className='sub-figure'><Naira>{userPrice.value}</Naira></p>
                    </header>
                  </div>
                  <hr />
                  <header>
                    <p className='TOTAL'>Total</p>
                    <p className='TOTAL-FIGURE'><Naira>{userPrice.value + userPrice.add}</Naira></p>
                  </header>
              </div>
              <div className='order-method-help'>
              <p className='address-head'>NEED HELP?</p>
                <hr />
                <p className='contact-help'>Contact an expect to support you</p>
                <Link to="/Payment">
                  <button id="helpButton" > LIVE CHAT  <img src={whatsapp} alt={whatsapp}  className="whatsapp-help"/> </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default UserInfo;
