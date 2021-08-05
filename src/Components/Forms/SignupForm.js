import React, { useState,Fragment } from 'react';
import Alert from "../Layout/Alert/Alert"
import {setAlert} from "../../Redux/actions/alertAction"
import {useDispatch} from "react-redux"


const SignupForm = ({submit}) => {
    const dispatch = useDispatch()
	const [credentials, setCredentials ] = useState({email: '', password: ''})

	const handleChange = e => setCredentials({...credentials, [e.target.name]: e.target.value})
	const { email, password }  = credentials

	const handleSubmit = e => {
		e.preventDefault()
        for(let name in credentials){
          if(credentials[name] === ""){
             dispatch(setAlert(`${name} can't be empty`,`danger`))
         }
       }  
		submit(credentials)
	}

    return (
        <Fragment>
            <div class="item--shapes">
		    <div class="custom--circle"></div>
		    <div class="custom--circle"></div>
		  </div>
		  <div class="auth--container d-flex">
		    <div class="modal-wrapper d-flex">
		      <div class="heading text--center mx-4">
		        <h1 class="mx-2 text--primary">Hey There</h1><span class="text--secondary">Please create your account</span>
		      </div>
		      <form onSubmit={handleSubmit}>
		        <div class="form--group">
		          <label class="text--secondary">Email</label>
		          <input class="border-bottom form--control" type="text" name="email" value={email} onChange={handleChange}/>
		        </div>
		        <div class="form--group">
		          <label class="text--secondary">Password</label>
		          <input class="border-bottom form--control" type="password" name="password" value={password} onChange={handleChange} />
		        </div>
		        {/* <div class="form--group">
		          <label class="text--secondary">Confirm Password</label>
		          <input class="border-bottom form--control" type="text"/>
		        </div> */}
		        {/* <div class="form-row d-flex">
		          <div class="input--container">
		            <input type="checkbox"/>
		            <label class="text--secondary mx-2">Remember Me</label>
		          </div>
		        </div> */}
		        <div class="btn--group my-2">
		          <button class=" btn btn-primary btn--round text--primary" type="submit">Sign Up </button>
		        </div>
		      </form>
		    </div>
		  </div>
        </Fragment>
    );
}

export default SignupForm;
