import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { validateSignIn } from "../../components/Validateinfo";
import { getLoginUser } from "../../helpers/api";
import { successToast, failedToast } from "../../components/Hooks/useUser";
import "./Signin.css";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [err, setErr] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '388830439247-jkdb9v4986lljr0f5a8jrqj0v60p9b7k.apps.googleusercontent.com',
        scope: 'email'
      }).then(() => {
        console.log(window.gapi.auth2.getAuthInsutance());
      });
    })
  }, [])
  
  const login = async (e) => {
    e.preventDefault();
    const values = {
      password,
      email
    }

    setErrors(validateSignIn(values))
    const payload = await getLoginUser(values);
    if (payload.message) {
      setErr(payload.message)
      failedToast();
      return
    } 

    localStorage.setItem('user', JSON.stringify(payload));
    successToast();
    setIsSubmitted(true);
    window.location = "/"
  }

  // useEffect(() => {
  //   const timeoutId = setTimeout(() => {
  //     login();
  //   }, 2000);

  //   return () => {
  //     clearTimeout(timeoutId)
  //   }
  // }, [err]);

  
 
  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form>
        <div className="form-inputs">
          <label>Email: </label>
          <input
            type="email"
            name="email"
            value={email}
            className='form-control'
            onChange={(e) => setEmail(e.target.value)}
            required />
        </div>

         {errors.email && <p style={{color:"red"}}>{errors.email}</p>} 
        
        <div className="form-inputs">
          <label>Password: </label>
          <input
            type="password"
            name="password"
            value={password}
            className='form-control'
            onChange={(e) => setPassword(e.target.value)}
            required />
        </div>
       
        {errors.password && <p style={{ color: "red" }}>{errors.password}</p>} 
       
        <label>
          <Link to="/createnewpassword">
            Forget Password
          </Link>
          </label><br />
         {err && <p style={{color:"red"}}>{err}</p>}
        <button
          className="btn btn-success SigninButton"
          onClick={(e) => { login(e) }}>
          Sign In
        </button>
      </form>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Sign In </div>
        {isSubmitted ? <div>{`Welcome on board`}</div> : renderForm }
      </div>
    </div>
  );
}
export default Signin;

