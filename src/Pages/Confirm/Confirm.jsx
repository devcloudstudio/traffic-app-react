import React from "react"

const Confirm = () => {
  return (
    <>
      <div className='item--shapes'>
        <div className='custom--circle'></div>
        <div className='custom--circle'></div>
      </div>
      <div className='auth--container d-flex'>
        <div className='modal-wrapper d-flex'>
          <div className='heading text--center mx-4'>
            <h1 className='mx-2 text--primary'>Confirm</h1>
            <span className='text--secondary'>
              Confirm
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Confirm;