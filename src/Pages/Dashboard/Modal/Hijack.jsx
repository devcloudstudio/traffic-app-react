import React from 'react'
import {
  useRouteMatch,
  //Link, 
  useHistory
} from 'react-router-dom'
import Modal from "../../../Components/Modal/Modal"

const Hijack = (props) => {
  let t = props.modalData
  console.log(props, 'props')
  let { path } = useRouteMatch()
  let { push } = useHistory()
  const pushHandler = (data, content_id) => {
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
          <img src="" />
          <div className="content">
            <h3 className="text--secondary">Title</h3>
            <p className="text--white">{props.trends.title} </p>
          </div>
        </div>
        <div className="btn--group" style={{ flexDirection: "column" }}>
          <button className="btn btn-outline-primary btn--round text--primary btn-modal" onClick={() => pushHandler("brand")}>Select Brand</button>
          <button className="btn btn-outline-primary btn--round text--primary btn-modal" onClick={() => pushHandler("message")}>Select Ad Content</button>
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
    </Modal>
  )
}

export default Hijack