import React, { useState } from "react"

import Alert from "../../Components/Layout/Alert/Alert";
import { setAlert } from "../../Redux/actions/alertAction";
import { useDispatch } from "react-redux";

const PasswordReset = () => {
  const dispatch = useDispatch();
  const [email, setCEmail] = useState('')
  const handleChange = () => {

  }

  return (
    <>
      <Alert />
      <div className='item--shapes'>
        <div className='custom--circle'></div>
        <div className='custom--circle'></div>
      </div>
      <div className='auth--container d-flex'>
        <div className='modal-wrapper d-flex'>
          <div className='heading text--center mx-4'>
            <h1 className='mx-2 text--primary'>Reset Password</h1>
            <div className='form--group'>
              <label className='text--secondary'>Email</label>
              <input
                value={email}
                onChange={handleChange}
                name='email'
                placeholder='Reset link will be sent to this here'
                className='border-bottom form--control'
                type='text'
                id='email'
              />
            </div>
            <div className='btn--group my-2' style={{ padding: '20px' }}>
              <button
                className='btn btn-primary btn--round text--secondary'
                id='login-button'
                type='submit'
              >
                Receive Reset Email
              </button>
              {/* <button className="btn btn-outline-primary btn--round text--primary">Sign Up </button> */}
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default PasswordReset;