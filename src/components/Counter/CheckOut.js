import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  useLocation,
  useAddress,
  useCart,
  usePrice,
  useUser,
  // successToast, failedToast
} from '../Hooks/useUser';
import { postOrder } from '../../helpers/api';
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';
import mark from '../../assets/mark.svg';
import flutter from '../../assets/Flutterwave.png';
import whatsapp from '../../assets/whatsapp.svg';
import Loader from '../Loader';
import success from '../../assets/success.gif';
import failed from '../../assets/failed.gif';
import './CheckOut.css'
// import { toast } from 'react-toastify';


function CheckOut() {
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
  const [responseOrder, setResponseOrder] = useState([])
  const [status, setStatus] = useState([]);


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
    window.location = '/CheckOut'
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
    setIsSubmitted(true);
    setResponseOrder(order);

    if (isSubmitted) return <Loader />

  }

  const config = {
    public_key: 'FLWPUBK_TEST-5a27093be49cc89f5b682e9981e12341-X',
    tx_ref: Date.now(),
    amount: responseOrder?.createdOrder?.totalPrice,
    currency: 'NGN',
    payment_options: 'card,mobilemoney,ussd',
    customer: {
      email: user?.email,
      phonenumber: userAddress?.phonenumber,
      name: user?.name,
    },
    customizations: {
      title: 'Euphorya Brand',
      description: 'Payment for items in cart',
      logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
    },
  };

  const handleFlutterPayment = useFlutterwave(config);
   
  return (
     <>
     
      {
        !status.status ? 
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
                  <input type="checkbox" className="fav_language" value="HTML" />
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
                      <p className='totaltosum'>&#x20A6;{userPrice.add}</p>
                    </header>
                </div>
                <div>
                    <header >
                      <div>
                          <input type="checkbox" name="payment" onClick={(e) => onSubmit(e)} disabled={isSubmitted} />
                        <label className='totaltopay'>Pay With Flutterwave</label>
                      </div>
                      <img src={flutter} alt={flutter} className="mcvisa" />
                      </header>
                      {
                        responseOrder?.createdOrder?.totalPrice
                          ?
                          <button
                            id="saveButton" 
                              onClick={() => {
                                handleFlutterPayment({
                                  callback: (response) => {
                                    setStatus(response);
                                    closePaymentModal() // this will close the modal programmatically 
                                  },
                                onClose: () => {}
                                });
                              }}
                          >
                            PAY NOW: &#x20A6;{userPrice.add}
                          </button>
                        :
                        ""
                      }
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
                            <img src={`https://store-betta.herokuapp.com${value.image}`} 
                                alt={value.image} 
                                className='summary-Image' 
                            />
                            <div className='summary-Body'>
                              <p className='value-name'>{value.name}</p>
                              <p className='value-price'>&#x20A6;{value.price}</p>
                              <p className='value-quantity'>{`Qty: ${value.qty}`}</p>
                            </div>
                        </header>
                  })}
                  <hr />
                  <div>
                    <header>
                      <p className='sub-total'>Subtotal</p>
                      <p className='sub-total'>&#x20A6;{userPrice.add}</p>
                    </header>
                    <header>
                      <p className='sub-total'>Delivery</p>
                      <p className='sub-figure'>&#x20A6;{userPrice.value}</p>
                    </header>
                  </div>
                  <hr />
                  <header>
                    <p className='TOTAL'>Total</p>
                    <p className='TOTAL-FIGURE'>&#x20A6;{userPrice.value + userPrice.add}</p>
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
          :
          <>
            {
            status?.status === "successful"
            && status?.amount === userPrice.value
            && status?.currency === "NGN" 
            ?
            <div className='container'>
              <div className='row'>
                <img src={success} alt={success} />
                <h1><Link to='/New'>Return To Shopping</Link></h1>
              </div>
            </div>
            :
            <div className='container'>
              <div className='row'>
                <p className='failedTransaction'>Transaction Failed</p>
                <img src={failed} alt={failed} />
                <h1><Link to='/New'>Return To Shopping</Link></h1>
              </div>
            </div>
            }
          </>
      }
    </>
  )
}

export default CheckOut;
