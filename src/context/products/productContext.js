import { createContext } from 'react';
import { initialState } from './productState';
import { useReducer } from 'react';
import productReducer from './productReducer';
import { FETCH_PRODUCTS } from '../types';

export const ProductContext = createContext(initialState)

export const ProductProvider=({children})=>{
const [state,dispatch]=useReducer(productReducer,initialState)
const storeProducts=(products)=>{
dispatch({
  type:FETCH_PRODUCTS,
  payload:products
})
}

return (<ProductContext.Provider value={{
  data:state,
  storeProducts
}
}>
  {children}
</ProductContext.Provider>)
}
export default ProductContext
