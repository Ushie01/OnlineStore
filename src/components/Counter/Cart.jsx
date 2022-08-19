import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { useLocation } from '../Hooks/useUser';
import { cartDeletetToast } from '../Hooks/useUser';
import shopping from '../../assets/local_shipping.svg';
import empty_cart from '../../assets/empty_cart.png';
import './Cart.css'


function Cart() {
  const { state, city, setStateId } = useLocation();
  const [products, setProducts] = useState([]);
  const [sum, setSum] = useState('');

  useEffect(() => {
    const userDetails = localStorage.getItem('cart');
    const user = JSON.parse(userDetails);
    if (user) {
      setProducts(user)
    }
  }, []);
  
 
  const handleState = (e) => {
    const getStateId = e.target.value;
    setStateId(getStateId)
  }
 
  // cart qty increment handle
  const add = (_id, size) => {
    setProducts(products.map((item) => item.productId === _id && item.size === size
      ?
      { ...item, qty: +(item.qty) + 1 }
      :
      { ...item }))
    localStorage.setItem('cart', JSON.stringify(products));
  }


  // cart item delete handle
  const deleteItem = (_id, size) => {
    setProducts(products.filter((item) => item.productId !== _id && item.size !== size));
    let temp = products.filter(item => item._id !== _id && item.size !== size);
    cartDeletetToast();
    localStorage.setItem("cart", JSON.stringify(temp));
    window.location = '/Cart'
  }


  // cart qty decrement handle
  const minus = (_id, size) => {
    setProducts(products.map((item) => item.productId === _id && item.size === size
      ?
      { ...item, qty: +(item.qty) - 1 }
      :
      { ...item }))
    localStorage.setItem('cart', JSON.stringify(products));
  } 


  //Handle Submit
  const handleSubmit = () => {
    let temp = products.map(function (item) {
      return parseFloat(item.price * item.qty);
    });
    let add = temp.reduce(function (prev, next) {
      return prev + next;
    }, 0);

    let quantities = products.map(function (qty) {
        return parseFloat(qty.qty);
    });
    let quant = quantities.reduce(function (prev, next) {
        return prev + next;
    }, 0);
    

    //Delivery amount
    let value = {};
    const amount = 120;
    if (quant > 1) {
      value = quant * amount;
    }
    const priceItem = { add, value };
    localStorage.setItem('priceItem', JSON.stringify(priceItem));
  }
  
  
  useEffect(() => {
    const getTotal = () => {
      let temp = products.map(function (item) {
        return parseFloat(item.price * item.qty);
      });

      let add = temp.reduce(function (prev, next) {
        return prev + next;
      }, 0);

      setSum(add);
      }
    getTotal();   

  });

  // console.log(sum);
  return (
    <>
      {!products.length
        ? 
          <>
            <div className='container'>
                <div className='row'>
                  <img src={empty_cart} alt={empty_cart} />
                </div>
            </div>
          </>
        :
        <div>
            <div>
              <div className='container-fluid'>
                <div className='row'>
                  <div className='cartImage'>
                    <p className='cart'>Cart</p>
                  </div>
                </div>
              </div>
              <div className='container'>
                <div className='row' >
                  <div className='shoppingCart'>
                    <div className='shoppingLeft col-md-8'>
                      <h1 id="cart">Shopping Cart</h1>
                      <hr id='horizon' />
                      {products && products.map((value, i) => (
                        <div key={i}>
                          <div className='rowCart'>
                            <i className="fa fa-times fa-3x m-2 " onClick={() => { deleteItem(value.productId, value.size) }}></i>
                            <div className='CartOne'>
                              <img src={`http://store-betta.herokuapp.com${value.image}`} alt={value.image} className='cartItem ' />
                            </div>
                            <div className='CartTwo'>
                              <h1>{`Name: ${value.name}`}</h1>
                              <h4>{`Quantity: ${value.qty}`}</h4>
                              <h4>{`Size: ${value.size}`}</h4>
                              <h4>Price: &#x20A6;{`${(value.price).toLocaleString()}`}</h4>
                              <h3>Subtotal : &#x20A6;{`${(value.price * value.qty).toLocaleString()}`}</h3>
                            </div>
                            <div className='CartThree'>
                              <button className="fa fa-plus-square fa-3x" onClick={() => { add(value.productId, value.size) }}></button>
                              <i className="btn-warning btn-sm fa-4x countSpan" >{value.qty}</i>
                              <button className="fa fa-minus-square fa-3x "
                                style={{ color: "green" }}
                                onClick={() => { minus(value.productId, value.size) }}
                                disabled={value.qty === 0 ? "disabled" : ""}></button>
                            </div>
                          </div>
                          <hr id='horizon' />
                        </div>
                      ))}
                      <div className='container'>
                        <div className='displayInline'>
                          <div className='nnpp'>Total:</div>
                          <div className='nnp' style={{ color: "black" }}>&#x20A6;{sum}</div>
                        </div>
                      </div>
                    </div>
                    <div className='shoppingRight col-md-4'>
                      <h1 className='cartTotal'>Delivery </h1>
                      <hr />
                      <h1 className='cartTotal'>Choose Your Location</h1>
                      <div className='form-inputs'>
                        {/* <label className='form-label'>State</label> */}
                        <select className='form-select' onClick={(e) => handleState(e)}>
                          <option className='Select'>--State--</option>
                          {state?.map((value, index) => {
                            return <option key={index} value={value.id} style={{ color: "black" }}>{value.name}</option>
                          })}
                        </select>
                      </div>
                      <div className='form-inputs fip'>
                        {/* <label className='form-label'>City</label> */}
                        <select className='form-select'>
                          <option className='option'>--City--</option>
                          {city?.lgas?.map((value, index) => {
                            return <option key={index} value={index} className="option">{value}</option>
                          })}
                        </select>
                      </div>
                      <hr />
                      <div className='displayInline'>
                        <div className='row'>
                          <div className='col-md-2'><img src={shopping} alt={shopping} /></div>
                          <div className='col-md-10 '>
                            <h3>Door Delivery</h3>
                            <p>Delivery #1,500.00</p>
                            <p>Delivery time starts from the day you place your order to the day one of our
                              associates makes a first attempts to deliver to you. Delivery will be attempted
                              2 times over 5days (7.00am to 5.30pm) after which the item will be cancelled, if
                              you are unreachable or unable to receive the order.
                            </p>
                          </div>
                          <hr />
                          <Link to="/UserInfo">
                            <button id="insButton" onClick={(e) => { handleSubmit(e) }}> CheckOut  </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        
          </div>
        }
    </>    
  );
}

export default Cart
