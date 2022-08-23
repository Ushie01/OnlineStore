import React, { useEffect, useContext } from 'react'
import { Link } from "react-router-dom"
import { fetchProducts } from "../../context/products/productState";
import { ProductContext } from "../../context/products/productContext";
import Carousel from 'react-elastic-carousel'
import useWindowDimensions from '../../utils/windowsWidthsHights';


function SliderTwo() {   
	const { width } = useWindowDimensions();
	const context = useContext(ProductContext);
	const { storeProducts, data } = context;
	
	useEffect(() => {
		fetchProducts()
		.then(data=>storeProducts(data))
	}, []); 

    return (
    <div>
        <div className="container-fluid">
			<h2>Trending <b>Products</b></h2>
			<Carousel
				enableAutoPlay={false}
				pagination={false}
				autoPlaySpeed={4000}
				showArrows={true}
				itemsToShow={width <= 430 ? 1 : 4}
				enableMouseSwipe={false}
				easing="cubic-bezier(.28,.91,.62,.08)"
				tiltEasing="cubic-bezier(0.110, 1, 1.000, 0.210)"
				transitionMs={700}
				itemPadding={width <= 430 ? [5, 10] : [5, 10]}
				>
				<></>
				{data.products.products && data.products.products.map((post, index) => (        			
				<div key={index}> 
					<Link to={`/ProductDetails/${post._id}`} key={post._id} style={{ textDecoration: 'none' }} >
						<div className="img-box" style={{marginTop: "30px"}} >
							<img src={`https://store-betta.herokuapp.com${post.image}`} className="img-fluid" alt={post.image} />
						</div>
						<h1>{post.brand}</h1>
						<div className='row'>
								<p className="item-pric">&#x20A6;{post.price}</p>	
						</div>
						<ul className='list-inline'>
							<li className="list-inline-item"> Rating : <i className="fa fa-star"></i> { `{ ${post.rating} }` } </li>
						</ul>
						<div className="btn btn-primary addCartC">
							Add to Cart
						</div>
					</Link>
					<hr style={{color:'gray'}}/>	 
				</div>
				))}  
			</Carousel>
	
        </div>
    </div>
  )
}

export default SliderTwo

      //   sanityClient.fetch(`*[_type == "post"]{
      //       _id, title, slug, strike, span, mainImage{
      //           asset->{_id,url}
      //       },alt
      //   }`)  
      //       .then((data) => setPost(data))
			// .catch(console.error);
    // Getting product from local state.
    // const productContext = useContext(ProductContext)
	// const { fetchProducts, products } = productContext
    // React.useEffect(() => {
    //    fetchProducts()
      
    // }, [])
    // console.log(products, 'products ****')