import React,{Fragment,useState,useReducer} from "react"
import { useDispatch, useSelector } from "react-redux"
import { saveMessage } from "../../../Redux/actions/userActions"







const Inputs = ({formHandler,formData})=>{
  const [data,setData] = useState("")
  const [chk,setChk] = useState(false)
  const leads = useSelector(state => state.leads) || []
  
  const onRadioChange = (data)=>{
     setData(data)
  }

  console.log("formData",formData)

  const onChkChange = ()=>{
     setChk(!chk)
  }

  return(

     <Fragment>
        <div class="custom-control custom-radio">
             <input type="radio" id="customRadio1" name="customRadio" class="custom-control-input" onChange={()=>onRadioChange("web")}/>
             <label class="custom-control-label text--white mx-2" for="customRadio2" >Visit webpage/Aff. Link</label>
              <p className="text--light mx-2">Open a visitor webpage in your visitor's browser </p>
              {data === "web" ?  (<div className="my-2">
                <div className="form--group flex-end">
                   <input className="btn btn-outline-secondary text--secondary w-100" type="text" name="webBaitText" value={formData.webBaitText} placeholder='Click Bait Text e.g "Click Here to Get Free Software' onChange={formHandler}/>
                </div>
                <div className="form--group flex-end">
                  <input className="border-bottom form--control" type="text" placeholder="URL to Open i.e Enter link you want traffic sent to"  name="tarfficSent" value={formData.tarfficSent} onChange={formHandler}/>
                </div>
               </div>) :""}
        </div>
        <div class="custom-control custom-radio">
          <input type="radio" id="customRadio2" name="customRadio" class="custom-control-input" onChange={()=>onRadioChange("social")}/>
          <label class="custom-control-label text--white mx-2" for="customRadio2">Social Share</label>
           <p className="text--light mx-2">Gain followers when visitor's share your web page link </p>
          {data === "social" ?  (<div className="my-2">
                <div className="form--group flex-end">
                   <input  className="btn btn-outline-secondary text--secondary w-100" type="text" placeholder="Click Bait text e.g Like and Follow our page for latest updates on Crypto" name="socialBaitText" value={formData.socialBaitText} onChange={formHandler}/>
                </div>
                <div className="form--group flex-end">
                   <input className="border-bottom form--control" type="url" placeholder="Enter URL eg. http:// and https://" name="SocialPageUrl" onChange={formHandler} value={formData.SocialPageUrl}/>
                </div>
          </div>) :""}

        </div>
        <div class="custom-control custom-radio">
          <input type="radio" id="customRadio2" name="customRadio" class="custom-control-input" onChange={()=>onRadioChange("opt")} />
          <label class="custom-control-label text--white mx-2" for="customRadio2">Optin (Build a Responsive List)</label>
           <p className="text--light mx-2">start building a list of active buyers from our hot traffic sources</p>
          {data === "opt" ?  (<div className="my-2">
                <div className="form--group flex-end">
                <input className="border-bottom form--control" type="text" placeholder="Enter click Bait text e.g 'Sign Up for Newsletter'" name="optinBaitText" value={formData.optinBaitText} onChange={formHandler}/>
              </div>
                <div className="form--group flex-end">
                   <input className="btn btn-outline-secondary text--secondary w-100" type="text" placeholder="Sign up now" name="optinButtonText" value={formData.optinButtonText} onChange={formHandler}/> 
                </div>
                <div className="form--group flex-end">
                   <input className="btn btn-outline-secondary text--secondary w-100" type="text" placeholder="Preferred Name" name="optinPreferredName" value={formData.optinPreferredName} onChange={formHandler}/>
                </div>
                <div className="form--group flex-end">
                   <input className="btn btn-outline-secondary text--secondary w-100" type="text" placeholder="Enter your best email address" name="optinBestEmail" value={formData.optinBestEmail} onChange={formHandler}/>
                </div>
                
              {/*
              <div className="form--group flex-end">
                   <button className="btn btn-outline-secondary text--secondary w-100" type="text">Enter click Bait text e.g 'Subscribe now to get free Trainings'</button>
                </div>
              <div className="form--group flex-end">
                <input className="border-bottom form--control" type="text" placeholder="Submit"/>
              </div>
              <div className="form--group flex-end">
                <input className="border-bottom form--control" type="text" placeholder="Preferred Name"/>
              </div>
              <div className="form--group flex-end">
                <input className="border-bottom form--control" type="text" placeholder="Enter your best email address"/>
              </div>*/}
                <div className="form--group flex-end">
                  <textarea  className="border-bottom form--control" placeholder="Create Success Message e.g. Congrats! 'You Have Successfully Subscribed to get Free Trainings from Us.'" name="successmsg" onChange={formHandler}/>
                </div>
                 <div className="form--group">
                  <label className="switch m-2 " >
                    <input type="checkbox" onChange={()=>onChkChange("sub")} />
                    <span className="slider round"></span>
                  </label>
                  <p className="text--light m-2">Connect your autoresponder</p>
                  { chk && (<div className="form--group selectbox-cont flex-end">
                   <select className="selectBox text--primary responder-selectbox w-100" name="autoresponder" onChange={formHandler}>
                     <option  disabled>Select AutoResponder</option>
                     <option value="mailchimp">MailChimp</option>
                     {leads.map(lead => {
                       if (lead){
                          return(
                            <option value={lead}>{lead}</option>
                          )
                       }
                     })}
                   </select>   
                </div>)}
                </div>

          </div>) :""}
        </div>
      </Fragment>
  )
}













const CallToAction = ({setShow,setShowMsgBox,formHandler,formData})=>{
  const dispatch = useDispatch()



  
  const submitHandler = (e)=>{
    e.preventDefault()
    setShow(true)

    
    dispatch(saveMessage(formData))
  }


	return(

     <div className="main--wrapper">
        <div className="auth--container d-flex">
          <div className="modal-wrapper d-flex">
            <div className="heading text--center mx-4">
              <h1 className="mx-2 text--primary text--bolder">Call To Action</h1><span className="text--secondary">Choose the Action You Want Your Visitors to Take</span>
            </div>
              <form>
              {/*<div className="form--group">
                <textarea  className="border-bottom form--control" placeholder="Your Message Here"/>
              </div>
              <span className="text--secondary">How do you want your message to appear?</span>*/}
               <div className="my-2">
                <div className="text--secondary my-2">CTA</div>
                   
                 {/*Inputs*/}

                 <Inputs formHandler={formHandler} formData={formData}/>

              </div>
              <div className="btn--group mt-5">
                <button className="btn btn-outline-primary btn--round text--primary" style={{flex:"0.9"}} onClick={()=>setShowMsgBox("CreateMessage")}>Back</button>
                <button className="btn btn-outline-primary btn-primary btn--round text--primary" onClick={submitHandler}>Save</button>
              </div>
            </form>
          </div>
        </div>
      </div>
	)
}

export default CallToAction