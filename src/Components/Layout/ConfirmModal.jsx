import React from "react"
import Modal from "../Modal/Modal"

const ConfirmModal = (props)=>{
  return(
         <Modal {...props} leftBtnContent="Back" rightBtnContent="DONE">
         <div className="">
            <div className="heading text--center mb-5">
              <h1 className="m-auto text--primary text--bolder confirm-icon">
               <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-exclamation-circle" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                  <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"/>
                </svg>
              </h1>
              {/*<span className="text--secondary">Content Preview with your Brand and messages</span>*/}
            </div>
            <div className="text--white heading confirm-text"> Are you sure  this is video you wish to hijack ?</div>
         </div>
       </Modal>
  )
}

export default ConfirmModal