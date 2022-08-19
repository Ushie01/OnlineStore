import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';
import { updateProductsDetails } from '../../../helpers/api';
import { getSingleProductDetails } from '../../../helpers/api';

function EditProducts() {
  const [name, setName] = useState('')
  const [price, setPrice] = useState(0)
  const [image, setImage] = useState('')
  const [brand, setBrand] = useState('')
  const [category, setCategory] = useState('')
  const [countInStock, setCountInStock] = useState(0)
  const [description, setDescription] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { _id } = useParams();
  
  const [state, setState] = useState([]);
    const requestDetails = async () => {
    const res = await getSingleProductDetails(_id);
      setState(res);
      setName(res.name);
      setPrice(res.price);
      setImage(res.image);
      setBrand(res.brand);
      setCategory(res.category);
      setCountInStock(res.setCountInStock);
      setDescription(res.description);
  };
  
  React.useEffect (() => {
    requestDetails();
  }, []);

  const updateProducts  = async (_id) => {
    const data = {
      name,
      price,
      image,
      brand,
      category,
      countInStock,
      description
    }
    await updateProductsDetails(_id, data);
    setIsSubmitted(true);
    window.location = '/Admin/Productslist';
  }

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0]
    const formData = new FormData()
    formData.append('image', file)
    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
      const { data } = await axios.post('https://store-betta.herokuapp.com/api/uploads', formData, config)
      setImage(data)
    } catch (error) {
      console.error(error)
    }
  }

  const renderForm = (
    <div>
      <div className='row '>
          <div className='col-md-4 addProduct'>
          <div className='add-form'>
            <h1>Edit Product</h1>
            <div className='form-input'>
                <label className='form-label'>Brand:</label><br />
                <input
                  type="text"
                  className="form-control"
                  value={brand}
                  onChange={(e) => setBrand(e.target.value)}
                  required
                />
            </div>
             <div className='form-input'>
                <label className='form-label'>Category:</label><br />
                <input
                  type="text"
                  className="form-control"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  required
                />
            </div>
             <div className='form-input'>
                <label className='form-label'>Name:</label><br />
                <input
                  type="text"
                  className="form-control"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
            </div>
            <div className='form-input'>
                <label className='form-label'>Price:</label><br />
                <input
                  type="number"
                  className="form-control"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  required
                />
            </div>
             <div className='form-input'>
                <label className='form-label'>Description:</label><br />
                <input
                  type="text"
                  className="form-control"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
            </div>
             <div className='form-input'>
                <label className='form-label'>Numbers In Stock:</label><br />
                <input
                  type="text"
                  className="form-control"
                  value={countInStock}
                  onChange={(e) => setCountInStock(e.target.value)}
                  required
                />
            </div>
            {/* <div>
              {image
                ? <img src={`http://store-betta.herokuapp.com${image}`}
                  alt={image}
                  className="imageProduct" />
                : <img src={`http://store-betta.herokuapp.com${state.image}`}
                  alt={state.image}
                  className="imageProduct" />}
            </div> */}
             <div className='form-input'>
                <label className='form-label'>Select Image: </label><br />
                <input
                  className="file-input"
                  onChange={uploadFileHandler}
                  type="file"
                  name="image"  
                  id="image-file"
                />
            </div>
                <button
                  type="submit"
                  className="btn btn-warning saveproduct"
                  onClick={() => { updateProducts(state._id); }}
              >
                Save Product
              </button>

         </div>
         </div>
        </div>
    </div>
  )
  return (
    <div className="login-form">
        {isSubmitted ? <h1>{`Successfully Updated!!`}</h1> : renderForm }
    </div>
  )
}

export default EditProducts
