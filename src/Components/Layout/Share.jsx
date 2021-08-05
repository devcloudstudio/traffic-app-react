import React,{useState,Fragment} from "react"
import Modal from "../Modal/Modal"

const Share = (props)=>{
  return(
	   <Modal {...props} leftBtnContent="Back" rightBtnContent="DONE">
         <div className="">
            <div className="heading text--center mb-5">
              <h1 className="mx-2 text--primary text--bolder">Share</h1>
            </div>
            <div className="btn--group" style={{flexDirection:"row"}}>
               <span className="share-icon">
                <img src="https://i.ibb.co/VMBGFCy/image-8.png" alt="image-8" border="0"/>
               </span>
               <span className="share-icon">
                <img src="http://assets.stickpng.com/images/5842a8fba6515b1e0ad75b03.png" alt="image-8" border="0"/>
               </span>
               <span className="share-icon">
               	 <img src="https://i.ibb.co/3c8PHjZ/image-10.png" alt="image-10" border="0"/>
               </span>
               <span className="share-icon">
               	<img src="https://i.ibb.co/ZdDnFBG/image-6.png" alt="image-6" border="0"/>
               </span>
               <span className="share-icon">
               	<img src="https://i.ibb.co/GQNCcHX/image-7.png" alt="image-7" border="0" />
               </span>
             </div>
             
         </div>
       </Modal>
  )
}

export default Share
