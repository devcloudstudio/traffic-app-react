import React from "react"
import Modal from "../Modal/Modal"
const CardPreview = (props)=>{
	return(
       <Modal {...props} leftBtnContent="Cancel" rightBtnContent="Publish">
          <div className="">
            <div className="heading text--center mb-5"></div>
            <div className="">
             <video src="http://www.tools4movies.com/trailers/1012/Kill%20Bill%20Vol.3.mp4" autoplay controls></video>
            </div>
            <div className="my-2">
              <p className="text--white"><strong>video title: </strong> <span className="text--light">AI in 10 hours || hindi / English </span></p>
              <p className="text--white"><strong>Description:  </strong> <span className="text--light"> What do you want your ad content to appear on the trending web page you hijack?</span></p>
            </div>

            <div className="btn--group" style={{flexDirection:"column"}}>
                <button className="btn btn-outline-primary  btn--round text--primary btn-modal" >Select Thumbnail</button>
                <button className="btn btn-primary btn--round text--primary btn-modal">Select Hot Traffic sources</button>
             </div>  
         </div>
       </Modal>
	)
}

export default CardPreview