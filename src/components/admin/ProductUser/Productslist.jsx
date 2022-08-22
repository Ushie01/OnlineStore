import React, { useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { deleteProductsDetails } from '../../../helpers/api';
import { getProductsDetails } from '../../../helpers/api';
import { useUser } from '../../Hooks/useUser';
import Loader from '../../Loader'

function Productslist({currentPost}) {
  const [data, setData] = React.useState();
  const [loading, setLoading] = React.useState(false);
  const { user } = useUser();
  const fetchData = async () => {
    const products = await getProductsDetails();
    setData(products)
  }
  
  
  useEffect(() => {
    setLoading(true)
    if (loading) {
      fetchData();
    }
    return () => setLoading(false)
  }, [loading]);


  if(!data) return <Loader />

  
  const deleteProducts = async (_id) => {
    if (window.confirm('Are you sure?')) {
      await deleteProductsDetails(_id)
      window.location = "/Admin/Productslist";
    }
  };


  return (
    <div>
    {user.name ?  
      <div className='container'>
        <div className='row ttable'>
          <header>
            <h1>Product</h1>
            <Link to={`/Admin/ProductsList/CreateProducts`}>
            <button>
              <span className='fa fa-cross'></span>
              Create Product
            </button>
            </Link>
          </header>
        </div>
        <hr />
        <div className='container'>
        <div className='row' style={{overflowX: "auto"}}>
          <table >
            <thead>
              <tr>
                <th>ID</th>
                <th>IMAGE</th>
                <th>NAME</th>
                <th>PRICE</th>
                <th>CATEGORY</th>
                <th>BRAND</th>
                <th>EDIT</th>
                <th>DELETE</th>
              </tr>
            </thead>
              {currentPost && currentPost.map((product, index) => (
            <tbody key={index}>
              <tr>
                <td>{product._id}</td>
                <th><img src={`https://store-betta.herokuapp.com${product.image}`} alt={product.image} className="imageProductOne"/></th>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.category}</td>
                <td>{product.brand}</td>
                <td>  
                  <Link to={`/Admin/ProductsList/EditProducts/${product._id}`} key={product._id}>
                    <button>
                      <i className="fas fa-edit"></i>
                    </button>
                  </Link>
                </td>
                <td>
                  <button>
                    <i className="fa fa-times" 
                       onClick={() => { deleteProducts(product._id) }}>
                    </i>
                  </button>
                </td>
              </tr>
            </tbody>
              ))}
          </table>
          </div>
        </div>
        </div>
        :
        <Navigate to="/" />
      }
    </div>
  )
}

export default Productslist
