import React, { useEffect, useState } from 'react';
import { getUserDetails } from '../../../helpers/api';
import { userDelete } from '../../../helpers/api';
import { Link } from 'react-router-dom';
import Loader from '../../Loader';
import Yes from '../../../assets/Yes.svg';
import No from '../../../assets/No.svg';


function Userlist() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUser = async () => {
      const userData = await getUserDetails();
      setUsers(userData);
    }
    getUser()
  }, []);
  
  if (!users) return <Loader />

  const deleteUser = async (_id) => {
    if (window.confirm('Are you sure?')) {
        await userDelete(_id)
        window.location = "/Admin/Userlist";
    }
  }
                                                           
  return (
    <div className='container'>
        <div className='row' style={{overflowX: "auto"}}>
        <h1>USER</h1>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>EMAIL</th>
                <th>ADMIN</th>
                <th>EDIT</th>
                <th>DELETE</th>
              </tr>
            </thead>
              <tbody>
                {users && users.map((user, i) => {
                 return <tr key={i}>
                          <td>{user._id}</td>
                          <td>{user.name}</td>
                          <td>{user.email}</td>
                          {
                            user.isAdmin 
                            ?
                            <td><img src={Yes} alt={Yes} /></td>
                            :
                            <td><img src={No} alt={No}/></td>
                          }
                          <td>  
                            <Link to={`/Admin/Userlist/EditUser/${user._id}`} key={user._id}>
                              <button>
                                <i className="fas fa-edit"></i>
                              </button>
                            </Link>
                          </td>
                          <td>
                            <button>
                              <i 
                                className="fa fa-times"
                                onClick={() => {deleteUser(user._id)}}
                              >    
                              </i>
                            </button>
                          </td>
                       </tr>
                 })}                
              </tbody>
          </table>
        </div>
    </div>
  )
}

export default Userlist
