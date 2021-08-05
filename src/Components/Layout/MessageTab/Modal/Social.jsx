
import React,{Fragment,useState} from "react"
import Modal from "../../../Modal/Modal"
import Social from "../../Ads/Social"


const SocialModal = (props)=>{
  const [show,setShow] = useState(true)
  console.log(props.data)
	return(
         <Modal {...props}>
         <div className="">
            <div className="heading text--center mb-5">
              <h1 className="text--primary text--bolder">Ad Content Social Style Preview</h1>
            </div>
            <div className="modal-card-preview">
       	    <div className="modal--image">
                {show && <Social data={props.formData} setShow={setShow}/>}
                <img src="https://images.unsplash.com/photo-1611808786599-82da0b05969e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHw&ixlib=rb-1.2.1&q=80&w=400" />
            </div>
            <div className="card--body px-2">
	       
	          {<p className="text--white"></p>}
	   
	      </div>
	      </div>
         </div>
       </Modal>
	)
}


export default SocialModal