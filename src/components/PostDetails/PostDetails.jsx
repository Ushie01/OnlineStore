import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import { getProducts } from '../../helpers/api';
import { validatePostDetails } from '../Validateinfo';
import { cartToast, alreadyAddCartToast } from '../Hooks/useUser';
import Dropdown from '../Dropdown/Dropdown';
import "./PostDetails.css";


function PostDetail() {
  const { _id } = useParams();
  const [size, setSize] = useState('');
  const [quantity, setQuantity] = useState('');
  const [list, setList] = useState([]);  
  const [errors, setErrors] = useState({});


  //fetching id details
  const [state, setState] = useState([]); 
  const requestDetails = async () => {
    const res = await fetch(`https://store-betta.herokuapp.com/api/products/${_id}`);
    const data = await res.json();
    setState(data);

    const resList = await getProducts();
    setList(resList)

    if (!localStorage.getItem("cart")) {
      localStorage.setItem("cart", "[]");
    }
  };

  React.useEffect (() => {
    requestDetails();
  }, []);



  //Add To Cart Handler
  const addItemToCart = (_id) => {
    const cart = JSON.parse(localStorage.getItem("cart"));
    
    let product = list.products?.find(function(product){
      return product._id === _id
    });

    const data = {
      _id: product._id,
      name: product.name,
      image: product.image,
      price: product.price,
      product: product._id
      // qty: product.quantity
    }

    const values = {
      quantity
    }

    setErrors(validatePostDetails(values));
    const details = { ...data, qty: quantity };

    if (values.quantity !== '' && values.size !== '') {

      if (cart.length === 0) {
        cart.push(details);
        cartToast();
        window.location = `/PostDetail/${_id}`
      } else {
        let res = cart.find(function (element) {
          return (element.productId === _id && element.size === details.size);
        });

        if (res === undefined) {
          cart.push(details);
          cartToast()
          window.location = `/PostDetail/${_id}`
        } else {
          alreadyAddCartToast()
        }
      }

    } else {
      alert("All fields are required")
    }

    localStorage.setItem("cart", JSON.stringify(cart)); 
  }


  return ( 
    <div>
      <main>
        <div className="containerImage">
          <div className="containerRow1">
            <img src={`http://store-betta.herokuapp.com${state.image}`} alt={state.image} className="containRow1"/>
          </div>
          <div className="containerRow2">
            <div className='containerPadding'>              
              <div>
                <h1 className='containerTitle'>{state.brand}</h1>
                <h2 style={{color:"gray"}}>{state.name}</h2>
                <h3 className='containerSpan'>&#x20A6;{state.price}</h3> 
                <p>{state.description}</p>
                <h3>Size --Select Size.</h3>
                <div>
                  <Dropdown
                    name="size"
                    type="number"
                    size={size}
                    setSize={setSize}
                    onChange={(e) => setSize(e.target.value)}
                    value={size}
                    required
                  />
                </div>

                 {errors.size && <h3 style={{color:"red"}}>{errors.size}</h3>}
                
                <div className='containerWrapper'>
                  <input
                    name='quantity'
                    type="number"
                    min={0} max={15}
                    onChange={(e) => setQuantity(e.target.value)}
                    className='containerInput form-control'                 
                    style={{ height: "50px" }}
                    value={quantity}
                    placeholder="Quantity"
                    required
                  />
                  
                  <button className='addToCart' onClick={() => { addItemToCart(state._id) }}  >Add Cart</button>

                </div>

                {errors.quantity && <h3 style={{ color: "red" }}>{errors.quantity}</h3>}
                
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}


export default PostDetail;


  // console.log(data.products);
  // const [data, setData] = useState(null);
  /*********Sanity Fetch********/
  //   useEffect(() => {
  //       sanityClient.fetch(`*[slug.current == "${slug}"]{
  //           _id, title, value, slug, strike, span, mainImage{
  //               asset->{_id,url}
  //           },alt
  //       }`)
  //           .then((post) => setPostDetail(post[0]))
  //           .catch(console.error);
      
  //   }, [slug]);
  
  // if (!PostDetail) return <h1>Loading...</h1>


