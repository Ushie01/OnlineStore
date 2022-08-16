// import React, { useEffect, useReducer } from 'react';
// import axios from 'axios';

// const initialState = {
//   loading: true,
//   error: '',
//   post:{}
// }

// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'FETCH_SUCCESS':
//       return {
//         loading: false,
//         post: action.payload,
//         error: ''
//       }
//     case 'FETCH_ERROR':
//       return {
//         loading: false,
//         post: {},
//         error: 'Something went wrong!'
//       }
//     default:
//       return state
//   }
// }

// function About({props}) {
//   const [state, dispatch] = useReducer(reducer, initialState)

//   useEffect(() => {
//     axios
//       .get(`http://store-betta.herokuapp.com/api/products`)
//       .then(response => {
//         dispatch({
//           type: 'FETCH_SUCCESS',
//           payload: response.data
//         })
//       })
//       .catch(error => {
//         dispatch({
//           type: 'FETCH_ERROR'
//         })
//       })
//     console.log(state.post);
//   }, [])
  
//   return (
//     <div>
//       {state.loading ? 'Loading' : <h1>{state.post.title}</h1>}
//       {state.error ? state.error : null}

//     </div>
//   )
// }

// export default About









import React, { useState, useEffect } from 'react';
import axios from 'axios';

function About() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [post, setPost] = useState([]);

  useEffect(() => {
    axios.get(`http://store-betta.herokuapp.com/api/products`)
      .then(res => {
        setLoading(false)
        setPost(res.data.products)
        setError('')
      })

      .catch(error => {
        setLoading(false)
        setPost([])
        setError('Something went wrong')
      })
    
    console.log(post);
  }, []);
   
  return (
    <div>
      {
        loading ? 'Loading' :
          <>
            <p>{ post.brand }</p>
         </>
      }
      {error ? error : null}
    </div>
  )
}

export default About
