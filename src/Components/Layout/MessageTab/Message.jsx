import React, { Fragment, useState, useEffect } from "react"
import { useLocation } from "react-router-dom"

import CreateMessage from "./CreateMessage"
//import PreviewMessage from "./PreviewMessage"
import MessageList from "./MessageList"
import CallToAction from "./CallToAction"


//Modal
import Banner from "./Modal/Banner"
import Popup from "./Modal/Popup"
import Social from "./Modal/Social"



//Extra
//import Thumbnail from "../Thumbnail"
//import Connect from "../Connect"


//info
import Instructions from "../Instructions"
//import { saveMessage } from "../../../Redux/actions/userActions"


const Message = () => {
  const [showMsgBox, setShowMsgBox] = useState(null)
  const [show, setShow] = useState(false)
  const [modal, setModal] = useState(null)



  const [formData, setFormData] = useState({
    message: "",
    color: "",
    style: "",

    //webPage
    webBaitText: "",
    tarfficSent: "",


    //social
    socialBaitText: "",
    SocialPageUrl: "",

    //optin
    optinBaitText: "",
    optinButtonText: "",
    optinPreferredName: "",
    optinBestEmail: "",
    successmsg: "",

    autoresponder: ''
  })


  const formHandler = (e) => {
    e.preventDefault()

    let { name, value } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }))


    // INIT you will get state of input just set in forms by formHandler() and formData

  }

  const { hash } = useLocation()
  const query = new URLSearchParams(hash.split("?")[1]);

  useEffect(() => {
    if (query.get("message")) {
      setShowMsgBox("PreviewMessage")
    }
  }, [hash])

  const onCancel = () => {
    setShow(false)
  }

  const showHandler = () => {
    console.log("show Modal")
    setShow(true)
  }

  return (
    <Fragment>
      {modal === "social" ? <Social show={show} formData={formData} onCancel={onCancel} /> : null}
      {modal === "banner" ? <Banner show={show} formData={formData} onCancel={onCancel} /> : null}
      {modal === "popup" ? <Popup show={show} formData={formData} onCancel={onCancel} /> : null}

      {
        showMsgBox === null ? <div className="flex-container h-sm-100 flex-column p-relative">

          <Instructions data="Customize your Ad Content (Message you want the traffic to see) and input your affiliate link or any link at all that you want TraffikPilot to send Hot Traffic to" />

          <div className="btn--group flex-sm-column">
            <button className="btn btn-outline-primary btn-primary btn--round text--primary p-sm-3" onClick={() => setShowMsgBox("PreviewMessage")}>Select Ad Content</button>
            <span className="text--secondary my-2">OR</span>
            <button className="btn btn-outline-primary  btn--round text--primary p-sm-3" onClick={() => setShowMsgBox("CreateMessage")}>Create New Ad Content</button>

            {/*Extra*/}
            {/*<button className="btn btn-outline-primary  btn--round text--primary p-sm-3" onClick={()=>setShowMsgBox("cta")}>Call to action</button>*/}
          </div>
        </div> : null
      }
      {/*showMsgBox === "PreviewMessage" ? showPreviewMessageHandle : null */}
      {showMsgBox === "CreateMessage" ? <CreateMessage setShowMsgBox={setShowMsgBox} formData={formData} formHandler={formHandler} setModal={setModal} /> : null}
      {showMsgBox === "PreviewMessage" ? <MessageList query={query} /> : null}
      {showMsgBox === "cta" ? <CallToAction setShowMsgBox={setShowMsgBox} setShow={setShow} formData={formData} formHandler={formHandler} /> : null}
    </Fragment>
  )
}
export default Message