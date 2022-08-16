import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { validateCreateNewPassword } from "../../components/Validateinfo";
import { updateUserLoginDetails } from "../../helpers/api";
import "./Signin.css";
import { usePrice } from "../../components/Hooks/useUser";

const CreateNewLogin = () => {
    const [confirmPassword, setConfirmPassword] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});
    const [err, setErr] = useState(null);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [details, setDetails] = useState([]);
    const login = async (e) => {
        e.preventDefault();
        const values = {
            password,
            confirmPassword
        }

        setErrors(validateCreateNewPassword(values))
        const payload = await updateUserLoginDetails(values);
        if (payload.message) {
            setErr(payload.message)
            return
        }
        localStorage.setItem('user', JSON.stringify(payload));
        setIsSubmitted(true);
        window.location = "/"
    }
  
    useEffect(() => {
        const userDetails = localStorage.getItem('user');
        const user = JSON.parse(userDetails);
        if (user) {
            setDetails(user);
        }
    }, []);
    
    console.log(details.email);

    const {userPrice} = usePrice();

    console.log(userPrice);


  // JSX code for login form
  const renderForm = (
    <div className="form">
        <form>
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
       
            {errors.password && <p style={{ color: "red" }}>{errors.password}</p>} 
       
            <br />
            {err && <p style={{color:"red"}}>{err}</p>}
        <button
          className="btn btn-success form-control createnewpassword"
          onClick={(e) => { login(e) }}>
          Sign In
        </button>
      </form>
    </div>
  );

    return (
        <>
            {details
                ?
                <div className="app">
                    <div className="login-form">
                        <div className="title">Create New Login Details </div>
                        {isSubmitted ? <div>{`Welcome on board`}</div> : renderForm }
                    </div>
                </div> 
                :
                <Navigate to="/Signup" />
                
            }
        </>
    );
}
export default CreateNewLogin;

