import React, { useState } from 'react';
import axios from 'axios';
import { createProductsDetails } from '../../../helpers/api';

function CreateProducts() {
  const [name, setName] = useState('')
  const [price, setPrice] = useState(0)
  const [image, setImage] = useState('')
  const [brand, setBrand] = useState('')
  const [category, setCategory] = useState('')
  const [countInStock, setCountInStock] = useState(0)
  const [description, setDescription] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false);

  const createProducts  = async () => {
    const data = {
      name,
      price,
      image,
      brand,
      category,
      countInStock,
      description
    }    
    await createProductsDetails(data);
    setIsSubmitted(true);
    // window.location = '/Admin/ProductsList/CreateProducts';
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
      const { data } = await axios.post('https://store-betta.herokuapp.com/api/upload', formData, config)
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
            <h1>CREATE NEW PRODUCT</h1>
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
                  className="form-control textarea extends-input is-hovered"
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
               <img src={`http://store-betta.herokuapp.com${image}`}
                  alt={image}
                  className="imageProduct" />
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
                  onClick={() => { createProducts() }}
              >
                Create Product
              </button>
            </div>
          </div>
        </div>
    </div>
  )
  return (
      <div className="login-form">
        {isSubmitted ? <h1>{`Successfully Created!!`}</h1> : renderForm }
    </div>
  )
}

export default CreateProducts
