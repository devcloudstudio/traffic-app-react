import React from 'react'
import Modal from "../../../Components/Modal/Modal"

const Videos = (props)=>{

	return(
	   <Modal {...props}>
         <div className="" style={{minWidth: "300px"}}>
            <div className="heading text--center mb-5">
              <h1 className="mx-2 text--primary text--bolder">Video SEO</h1><span className="text--secondary">Copy SEO for your content</span>
            </div>
       	    
            <div className="form--group">
                <label className="text--secondary">Title</label>
                <input className="border-bottom form--control" type="text"/>
                <i class="fas fa-copy text--primary copy-icon"></i>
            </div>
            <div className="form--group">
              <label className="text--secondary">Description</label>
              <textarea  rows="4" className="border-bottom form--control" type="text"/>
              <i class="fas fa-copy text--primary copy-icon"></i>
            </div>
            <div className="form--group">
                <label className="text--secondary">Tags</label>
                <input className="border-bottom form--control" type="text"/>
                <i class="fas fa-copy text--primary copy-icon"></i>
            </div>
         </div>
       </Modal>
	)
}

export default Videos