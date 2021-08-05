import React from 'react'
import Modal from "../../modal/Modal" 

const HijackModal = (props)=>{

	return(
	   <Modal {...props}>
         <div className="">
            <div className="heading text--center mb-5">
              <h1 className="mx-2 text--primary text--bolder">Hijack</h1><span className="text--secondary">Hijack this Content</span>
            </div>
       	    <div className="modal--image">
                <img src="https://images.unsplash.com/photo-1611808786599-82da0b05969e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHw&ixlib=rb-1.2.1&q=80&w=400" />
                <div className="content">
                  <h3 className="text--secondary">Title</h3>
                  <p className="text--white">Lorem ipsum is the Content for placholder of things </p>
                </div>
            </div>
            <div className="btn--group" style={{flexDirection:"column"}}>
                <button className="btn btn-outline-primary btn--round text--primary btn-modal">Select Brand</button>
                <button className="btn btn-outline-primary btn--round text--primary btn-modal">Select Message</button>
             </div>
         </div>
       </Modal>
	)
}

export default HijackModal