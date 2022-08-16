import {FETCH_USER, USER_ERROR} from '../types'

const userReducer = (state, action) => {
    switch (action.type) {
        case FETCH_USER: 
            return {
                ...state,
                products: action.payload
            }
        case USER_ERROR:
            return{
                ...state,
                error: action.payload
            }
        default:
            return state
    }
}

export default userReducer
