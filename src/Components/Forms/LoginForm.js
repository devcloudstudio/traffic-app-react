import React, { useState, Fragment } from "react";
import Alert from "../Layout/Alert/Alert";
import { setAlert } from "../../Redux/actions/alertAction";
import { useDispatch } from "react-redux";

const LoginForm = ({ submit }) => {
  const dispatch = useDispatch();
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const handleChange = (e) =>
    setCredentials({ ...credentials, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    for (let name in credentials) {
      if (credentials[name] === "") {
        dispatch(setAlert(`${name} can't be empty`, `danger`));
      }
    }

    submit(credentials);
  };

  const { email, password } = credentials;
  return (
    <Fragment>
      <Alert />
      <div className='item--shapes'>
        <div className='custom--circle'></div>
        <div className='custom--circle'></div>
      </div>
      <div className='auth--container d-flex'>
        <div className='modal-wrapper d-flex'>
          <div className='heading text--center mx-4'>
            <h1 className='mx-2 text--primary'>Welcome Back</h1>
            <span className='text--secondary'>
              Please Login To Your Account
            </span>
          </div>
          <form onSubmit={handleSubmit} id='login-form'>
            <div className='form--group'>
              <label className='text--secondary'>Email</label>
              <input
                value={email}
                onChange={handleChange}
                name='email'
                className='border-bottom form--control'
                type='text'
                id='email'
              />
            </div>
            <div className='form--group'>
              <label className='text--secondary'>Password</label>
              <input
                value={password}
                onChange={handleChange}
                name='password'
                className='border-bottom form--control'
                type='password'
                id='password'
              />
            </div>
            {/* <div className="form-row d-flex">
	          <div className="input--container">
	            <input type="checkbox"/>
	            <label className="text--secondary mx-2">Remember Me</label>
	          </div><a className="link text--secondary" href="#">Forget Password</a>
	        </div> */}
            <div className='btn--group my-2'>
              <button
                className='btn btn-primary btn--round text--secondary'
                id='login-button'
                type='submit'
              >
                Login
              </button>
              {/* <button className="btn btn-outline-primary btn--round text--primary">Sign Up </button> */}
            </div>
            <a href='/password-reset'>
              <span className='text--secondary'>Forgot Password</span>
            </a>
            <a
              href='/signup'
              style={{
                position: "fixed",
                top: "0",
                paddingTop: "20px",
                right: "50px",
              }}
            >
              <span className='text--secondary' style={{ color: "white" }}>
                Don't have an account?
              </span>
            </a>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default LoginForm;
