import React from "react"
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { saveMessage } from "../../../Redux/actions/userActions"

const CreateMessage = ({setShowMsgBox,setModal,formHandler,formData})=>{
  
 const dispatch = useDispatch()

  const submitHandler = (e)=>{
    e.preventDefault()
    setShowMsgBox('cta')

   
  }


  

	return(

     <div className="main--wrapper">
        <div className="auth--container d-flex">
          <div className="modal-wrapper d-flex">
            <div className="heading text--center mx-4">
              <h1 className="mx-2 text--primary text--bolder">Ad Content</h1><span className="text--secondary">Create your Ad Content</span>
            </div>
            <form>
              <div className="form--group">
                <textarea  className="border-bottom form--control" placeholder="Your Ad Content Here" onChange={formHandler} defaultValue={formData.message} name="message" />
              </div>
              <span className="text--secondary">How Do You Want Your Ad Content to Appear on the Trending Content You Hijacked??</span>
              <div className="my-2">
                <div className="text--primary my-2">Ad Content Style</div>
                <div class="custom-control custom-radio">
                  <input type="radio" id="customRadio1"  class="custom-control-input" name="style" value="social" checked={formData.style === "social" ? true:false} onChange={(e)=>{
                    setModal("social");
                    formHandler(e)
                  }}/>
                  <label class="custom-control-label text--white mx-2" HTMLFor="customRadio1" >Social</label>
                  <p class="custom-control-label text--secondary mx-2" HTMLFor="customRadio1">A simple social format</p>
                </div>
                <div class="custom-control custom-radio">
                  <input type="radio" id="customRadio2"  class="custom-control-input" name="style" value="banner" checked={formData.style === "banner" ? true:false} onChange={(e)=>{
                    setModal("banner")
                    formHandler(e)
                  }}/>
                  <label class="custom-control-label text--white mx-2" for="customRadio2">Banner</label>
                  <p class="custom-control-label text--secondary mx-2" for="customRadio2">An attention grabbing full width message</p>
                </div>
                <div class="custom-control custom-radio">
                  <input type="radio" id="customRadio2"  class="custom-control-input"  name="style" value="popup" checked={formData.style === "popup" ? true:false} onChange={(e)=>{
                    setModal("popup")
                    formHandler(e)
                  }}/>
                  <label class="custom-control-label text--white mx-2" for="customRadio2" >Popup</label>
                  <p class="custom-control-label text--secondary mx-2" for="customRadio2">A popup message with full screen over</p>
                </div>
              </div>
              <div className="text--primary my-2">
                <select className="text--primary selectBox form--selectBox" onChange={(e)=>{
                    formHandler(e)
                  }} name="color">
                  <option className="text--primary" disabled > Choose Your Color</option>
                  <option className="" value="red" selected={formData.color === "red" ? true:false} > Red</option>
                  <option className="" value="green" selected={formData.color === "green" ? true:false}> Green</option>
                  <option className="" value="blue" selected={formData.color === "blue" ? true:false}> Blue</option>
                  <option className="" value="white" selected={formData.color === "white" ? true:false}> White</option>
                </select>
              </div>
              <div className="btn--group mt-5">
                <button className="btn btn-outline-primary btn-primary btn--round text--primary" onClick={submitHandler}>Next</button>
              </div>
            </form>
          </div>
        </div>
      </div>
	)
}

export default CreateMessage