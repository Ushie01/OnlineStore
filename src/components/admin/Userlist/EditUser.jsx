import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import { updateUser } from '../../../helpers/api';
import { getUserProfile } from '../../../helpers/api';
import Loader from '../../Loader';

function EditUser() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isAdmin, setIsAdmin] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { id } = useParams();

  const [state, setState] = useState([]);
    const requestDetails = async () => {
    const res = await getUserProfile(id);
      setState(res);
      setName(res.name);
      setEmail(res.email);
      setIsAdmin(res.isAdmin);
  };

  React.useEffect (() => {
    requestDetails();
  }, []);


  const update = async (_id) => {
    const data = {
      name,
      email,
      isAdmin
    }

    await updateUser(_id, data);
    setIsSubmitted(true);
    window.location = '/Admin/Userlist';
  }
  

  if(!state) return <Loader />

  
  const renderForm = (
    <div>
      <div className='row '>
          <div className='col-md-4 addProduct'>
          <div className='add-form'>
            <h1>Edit User</h1>

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
                  <label className='form-label'>Email:</label><br />
                  <input
                    type="text"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
              </div>
              
              <div className='form-input'>
                <label class="checkbox">
                  <input
                    type="checkbox"
                    checked={isAdmin}
                    onChange={(e) => setIsAdmin(e.target.checked)}
                  />
                  Set Admin
                </label>
              </div>

            </div>

            <button
              type="submit"
              className="btn btn-warning saveproduct"
              onClick={() => { update(state._id); }}
            >
            Save Product
            </button>

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

export default EditUser
