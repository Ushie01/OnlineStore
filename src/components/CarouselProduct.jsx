import React, { useEffect, useState } from 'react';
import Carousel from 'react-elastic-carousel';
import { Link } from 'react-router-dom';
import useWindowDimensions from '../utils/windowsWidthsHights';
import { getProducts } from '../helpers/api';
import Loader from './Loader';

// import { Link } from 'react-router-dom'
import './Carousel.css'
// import useWindowDimensions from '../util/windowsHeightWidth'

const CarouselProduct = () => {
  const { width } = useWindowDimensions();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
        const products = await getProducts();
        setProducts(products)
    }
    fetchData()
  }, [])

  if (!products) return <Loader />
    
  return  (
    <div className="main-container">
      <Carousel
        enableAutoPlay={true}
        autoPlaySpeed={6000}
        showArrows={width <= 430 ? false : true}
        pagination={false}
        itemsToShow={width <= 430 ? 1 : 2}
        enableMouseSwipe={false}
        easing="cubic-bezier(.28,.91,.62,.08)"
        tiltEasing="cubic-bezier(0.110, 1, 1.000, 0.210)"
        transitions={700}
      >
        {products.products?.map((product) => (
          <Link to={`/PostDetail/${product._id}`} key={product._id} style={{ textDecoration: 'none' }} >
          <div>
              <figure>
                <img className="fluid" alt={product.image} src={`http://store-betta.herokuapp.com${product.image}`} />
                <h1 className='productBrand'>{product.brand}</h1>
              </figure>
          </div>
          </Link>
        ))}
      </Carousel>
    </div>
  )
}

export default CarouselProduct