import React from "react"

const Connect = ()=>{
  return(

     <div className="main--wrapper">
        <div className="auth--container d-flex flex-column">
          <div className="modal-wrapper">
            <div className="heading text--center mx-4">
              <h1 className="mx-2 text--primary text--bolder">Connect account with your channels</h1>
            </div>
            <form className="form">
              <div className="form--group">
                <input className="border-bottom form--control" type="text" placeholder="Youtube"/>
              </div>
              <div className="form--group">
                <input className="border-bottom form--control" type="text" placeholder="vimeo"/>
              </div>
              <div className="form--group">
                <input className="border-bottom form--control" type="text" placeholder="Tik Tok"/>
              </div>
              <div className="btn--group">
                <button className="btn btn-outline-primary btn--round text--primary">Cancel</button>
                <button className="btn btn-outline-primary btn-primary btn--round text--primary">Save</button>
              </div>
            </form>
          </div>
        </div>
      </div>
  )
}

export default Connect