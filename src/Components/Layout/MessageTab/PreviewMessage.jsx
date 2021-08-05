import React from "react"

const PreviewMessage = ()=>{
	return(

     <div className="main--wrapper">
        <div className="auth--container d-flex">
          <div className="modal-wrapper d-flex">
            <div className="heading text--center mx-4">
              <h1 className="mx-2 text--primary text--bolder">Message</h1><span className="text--secondary">Message Preview</span>
            </div>
             <div className="img--container preview">
               <h1 className="text--secondary">Your Message</h1>
             </div>
            <form>
              {/*<div className="form--group">
                   
                <label className="text--secondary">Email</label>
                <textarea className="border-bottom form--control"/>
              </div>*/}
              <div className="btn--group mt-5">
                <button className="btn btn-outline-primary btn--round text--primary">Cancel</button>
                <button className="btn btn-outline-primary btn-primary btn--round text--primary">Next</button>
              </div>
            </form>
          </div>
        </div>
      </div>
	)
}

export default PreviewMessage