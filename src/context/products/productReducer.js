import {FETCH_PRODUCTS, PRODUCTS_ERROR} from '../types'

const productReducer = (state, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS: 
            return {
                ...state,
                products: action.payload
            }
        case PRODUCTS_ERROR:
            return{
                ...state,
                error: action.payload
            }
        default:
            return state
    }
}

export default productReducer
