import React from 'react'
import { useRouteMatch, Link, useHistory } from 'react-router-dom'
import Modal from "../../../Components/Modal/Modal"

const Hijack = (props) => {
  const { showHandler, modalData, hijackObject, setHijackObjectArticle } = props
  let t = modalData
  let { path } = useRouteMatch()
  let { push } = useHistory()
  setHijackObjectArticle(t)
  const pushHandler = (data, content_id) => {
    console.log(content_id)
    content_id = `${data}1`
    push(`${path}#${data}?${data}=${content_id}`)
    props.onCancel()
  }

  return (
    <Modal {...props}>
      <div className="">
        <div className="heading text--center mb-5">
          <h1 className="mx-2 text--primary text--bolder">Hijack</h1><span className="text--secondary">Hijack this Content</span>
        </div>
        <div className="modal--image">
        <iframe src={t.link} frameborder="0" style={{width: '100%'}}></iframe>
        
          <div className="content">
            
            
          </div>
        </div>
        <div className="btn--group" style={{ flexDirection: "column" }}>
          <h3 className="text--secondary">Title</h3>
          <p className="text--white">{t.title !== null ? t.title : " "} </p>
          {/* <button className="btn btn-outline-primary btn--round text--primary btn-modal" onClick={() => pushHandler("brand")}>Select Brand</button>
          <button className="btn btn-outline-primary btn--round text--primary btn-modal" onClick={() => pushHandler("message")}>Select Ad Content</button> */}
          <button className={`btn text--primary btn--round btn-modal btn-outline-primary ${hijackObject.brand === undefined ? '' : 'nav-form'}`} onClick={() => { props.setModal("BrandChooser"); showHandler() }}>Select Brand</button>
          <button className={`btn text--primary btn--round btn-modal btn-outline-primary ${hijackObject.message === undefined ? '' : 'nav-form'}`} onClick={() => { props.setModal("MessageChooser"); showHandler() }}>Select Ad Content</button>
        </div>
      </div>
      <div className="btn--group mx-3" >
        <button className="btn btn-outline-primary btn--round text--primary" onClick={() => props.onCancel()}>Back</button>
        <button className="btn btn-outline-primary btn-primary btn--round text--primary" onClick={() => {
          console.log("aa")
          props.setModal("BannerModal")
          props.showHandler()
        }}>Next</button>
      </div>
    </Modal >
  )
}

export default Hijack