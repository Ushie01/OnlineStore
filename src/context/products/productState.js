const baseUrl = 'https://store-betta.herokuapp.com/api/products'                                                                                 

export const fetchProducts = async() =>{
  const res = await fetch(baseUrl);
  const data = await res.json();
  return data
}

export const initialState = {
    products: [],
    loading: false
}


// import { useReducer } from 'react';
// import ProductContext from './productContext';
// import productReducer from './productReducer';
// import { FETCH_PRODUCTS, PRODUCTS_ERROR } from '../types';

// const productState = props => {
//     const initialState = {
//         products: [],
//         loading: false
//     }
// }


// const config = {
//     method: 'GET',
//     headers: {
//       Accept: 'application/json',
//       'Content-Type': 'application/json',
//     },
// };
  
// const ProductState = props => {
//     const initialState = {
//         products: [],
//         loading: false
//     }

//     const [state, dispatch] = useReducer(productReducer, initialState)
//     const fetchProducts = async () => {
//         try {
//             const products = await (
//                 await fetch(
//                   `${baseUrl}/api/products`,
//                   config,
//                 )
//               ).json();
//             console.log(products, '*******');
//             dispatch({
//                 type: FETCH_PRODUCTS,
//                 payload: products.data
//             })
//         } catch (error) {
//             console.error(error)
//             dispatch({
//                 type: PRODUCTS_ERROR,
//                 payload: error,
//             })
//         }
//     }

//     // fetchProducts()
   
//     return (
//         <ProductContext.Provider
//         value={{
//             products: state.products,
//                 fetchProducts,
//             }}
//         >
//             {props.children}
//         </ProductContext.Provider>
//     )
// }

// export default productState