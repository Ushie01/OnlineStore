import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { createUser } from '../../helpers/api';
import { validateSignUp } from '../../components/Validateinfo';
import { successToast, failedToast } from '../../components/Hooks/useUser';
import Signin from "../auth/Signin";
import './Signup.css'
import './Signin'


function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [err, setErr] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState();
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    const values = {
      name,
      email,
      password,
      confirmPassword
    }


    //Sign-Up Form Validation
    setErrors(validateSignUp(values));
    const payload = await createUser(values);
    if (payload.message){
      setErr(payload.message);
      failedToast()
      return
    } 
    localStorage.setItem('user', JSON.stringify(payload));
    successToast();
    setIsSubmitted(true);
    navigate('/')
  }


  const renderForm = (
    <>
      <div>
          <div className='container-fluid nju'>
              <div className='row SignUpPage'>
                  <h1 className="signUp">Sign Up</h1>
                  <form>
                    <div className='form-inputs'>
                      <label>User Name : </label>
                      <input 
                        onChange={(e) => setName(e.target.value)} 
                        value={name} 
                        name="name"
                        type="text" 
                        className='form-control'
                        required 
                        />
                    </div>
                    
                     {errors.name && <p style={{color:"red"}}>{errors.name}</p>} 
                     
                    <div className='form-inputs'>
                      <label>Email :</label>
                      <input 
                        onChange={(e) => setEmail(e.target.value)} 
                        value={email} 
                        name="email"
                        type="email" 
                        className='form-control'
                        required 
                      />
                    </div>
                    
                      {errors.email && <p style={{color:"red"}}>{errors.email}</p>}  
                      
                    <div className='form-inputs'>
                      <label>Password : </label>
                      <input 
                        onChange={(e) => setPassword(e.target.value)} 
                        value={password} 
                        type="text" 
                        name="password" 
                        className='form-control' 
                        required
                      />
                    </div>
                    
                     {errors.password && <p style={{color:"red"}}>{errors.password}</p>} 
                    
                    <div className='form-inputs'>
                      <label>Confirm Password : </label>
                      <input 
                        type="text"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        value={confirmPassword}
                        name="confirmPassword"
                        className='form-control'
                        required 
                      />
                    </div>
                    
                     {errors.confirmPassword && <p style={{color:"red"}}>{errors.confirmPassword}</p>} 
                      
                    <input type="checkbox" name="vehicle1" value="Bike" />
                    <label> <h6>I agree to <Link to={Signin} >Terms & conditions</Link></h6></label><br></br>
                    <label>Already have an account? <Link to="/Signin">Sign In</Link></label><br />
                    
                    {err && <p style={{color:"red"}}>{err}</p>}
                   
                    <input onClick={(e) => { handleSubmit(e) }} 
                      type="reset" 
                      value="Create Account" 
                      className='createAccount' 
                      /><br />
                  </form>
              </div>
          </div>
      </div>
    </>
  )

  return (
    <div className='app'>
      <div className='login-form'>
        {isSubmitted ? <div>{`Welcome on board`}</div> : renderForm}
      </div>
    </div> 
  );
}

export default Signup


