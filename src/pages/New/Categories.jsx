import React, { useState, Fragment, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import { getProductsDetails } from '../../helpers/api';
import InputSlider from '../../components/InputSlider';
import './New.css'
import Naira from 'react-naira';

function Categories({ currentPost, data }) {
  const { category } = useParams();
  const [value, setValue] = useState('');
  const [slide, setSlide] = useState(0);
  const [product, setProduct] = useState([]);
  const uniqueCategory = [];
  const Categories = product.products?.filter(element => {
    const isDuplicate = uniqueCategory.includes(element.brand);
    if (!isDuplicate) {
      uniqueCategory.push(element.brand);
      return true;
    }
    return false;
  });

  console.log(category);
  useEffect(() => {
    const products = async () => {
      const requestProducts = await getProductsDetails();
      setProduct(requestProducts);
    };
    products();
  }, [])

  const filtered = product.products?.filter(item => {
    return item.brand === category;
  })
  console.log(filtered);

  return (
  <div>
      <div className="container">
          <div className="row in-new">
            <div className="col-md-3">
              <div className="container ner">
                <p id="Search">Search</p>
                <form action="">
                  <div className="form-row">
                    <input type="text" id="name" placeholder="Submit.." value={value} onChange={(e) => setValue(e.target.value)}/>
                    {/* <label className="label"><i className="fa fa-search far"></i></label> */}
                  </div>
                </form>
              <p id="price">Price</p>

              <InputSlider value={slide} onChange={(e) => setSlide(e.target.value)}/>
           
              <p id="Categories">Brand</p>
              {uniqueCategory && uniqueCategory.map((post, i) => (
                <Fragment key={i}>
                  <Link to={`/Brand/${post}`} key={post} className="pge">
                    <p>{post}</p>
                  </Link>
                </Fragment>
              ))}
           </div>
          </div>
      
          <div className="col-md-9">
            <div className='row'>
              {filtered && filtered.filter((post) => {
                if (value == "") {
                  return post
                } else if (post.brand.toLowerCase().includes(value.toLowerCase())){
                  return post
                }
                }).map((post, i) => (
                <div className='col-md-4' key={i}>
                   <Link to={`/PostDetail/${post._id}`} key={post._id} className="pge">
                    <div className="thumb-wrapper">
                        <img src={`http://store-betta.herokuapp.com${post.image}`} className="img-fluid imgHome" alt={post.image} />        
                        <div>
                          <p>{post.brand}</p>
                          <p className='postBrand'>{post.name}</p> 
                          <p className="item-price"><span><Naira>{post.price}</Naira></span></p>	
                        </div>  
                    </div>
                  </Link>
              </div>
            ))}
            </div>
          </div>
        </div>
      </div>
      
  </div>   
  )
} 

export default Categories



