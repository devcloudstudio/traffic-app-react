import React from "react"

const SelectExistingBrand = ()=>{
	return( 

     <div className="main--wrapper">
        <div className="auth--container d-flex">
          <div className="modal-wrapper d-flex">
            <div className="heading text--center mx-4">
              <h1 className="mx-2 text--primary text--bolder my-2">Brands</h1><span className="text--secondary">Choose Your Brand</span>
            </div>
             <div className="btn--group flex-column mx-4">
               <button className="btn btn-outline-primary btn--round text--primary p-sm-3 px-2 " style={{padding:"0.8rem"}}>Select Existing Brands</button>
               <span className="text--secondary my-2">OR</span>
               <button className="btn btn-outline-primary  btn--round text--primary p-sm-3 px-2" style={{padding:"0.8rem"}}>Create Brand</button>
            </div>
            <div className="btn--group mt-5 w-100">
                <button className="btn btn-outline-primary btn--round text--primary">Back</button>
                <button className="btn btn-outline-primary btn-primary btn--round text--primary">Next</button>
              </div>
          </div>
        </div>
      </div>
	)
}

export default SelectExistingBrand