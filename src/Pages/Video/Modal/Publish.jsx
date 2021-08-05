import React from 'react'
import Modal from "../../../Components/Modal/Modal"

const Publish = (props)=>{

  return(
     <Modal {...props}>
         <div className="">
            <div className="heading text--center mb-5">
              <h1 className="mx-2 text--primary text--bolder">Publish</h1><span className="text--secondary">Edit/Change Thumbnail,Title and description</span>
            </div>
            <div className="modal--image">
                <img src="https://images.unsplash.com/photo-1611808786599-82da0b05969e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHw&ixlib=rb-1.2.1&q=80&w=400" />
                <div className="content mx-2">
                  <i className="fas fa-edit edit-icon"></i>
                </div>
            </div>
            <div className="form--group">
                <label className="text--secondary">Title</label>
                <input className="border-bottom form--control" type="text"/>
            </div>
            <div className="form--group">
              <label className="text--secondary">Description</label>
              <textarea  rows="4" className="border-bottom form--control" type="text"/>
            </div>
            
         </div>
       </Modal>
  )
}

export default Publish