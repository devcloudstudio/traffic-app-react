import React,{useState,Fragment} from "react"
import Modal from "../Modal/Modal"

const Success = (props)=>{
  return(
	   <Modal {...props} rightBtnContent="GO TO Dashboard">
         <div className="">
            <div className="heading text--center mb-5">
              <h1 className="m-auto text--primary text--bolder confirm-icon">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
              </svg>
              </h1>
              {/*<span className="text--secondary">Content Preview with your Brand and messages</span>*/}
            </div>     
            <div>
               <h1 className="text--bolder text--white text--center my-2">Yay ! Its Done</h1>
               <p  className="text--white text--center">Hijacked video succesfully uploaded</p>
            </div>    
         </div>
       </Modal>
  )
}

export default Success
