import React, { Fragment, useState } from "react"

const Instructions = ({ data }) => {
   const [isOpen, setIsOpen] = useState(false)
   return (
      <Fragment>
         <div className="instructions-container" >
            <div className="social-wrapper">
               <button className="more-details" onClick={() => setIsOpen(!isOpen)}>
                  <span className="fas fa-question-circle"></span>
               </button>
               {isOpen && (<div className="instructions-widget">
                  <span className="text--bolder align-center">Details</span>
                  <hr />
                  <h5 className="mt-1">{data}</h5>
               </div>)}
            </div>
         </div>
      </Fragment>
   )
}

export default Instructions