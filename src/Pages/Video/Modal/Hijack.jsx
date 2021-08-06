import React from 'react'
import { useRouteMatch, Link, useHistory } from 'react-router-dom'
import Modal from "../../../Components/Modal/Modal"


const Hijack = (props) => {

  let { path } = useRouteMatch()
  let { push } = useHistory()
  const pushHandler = (data) => {
    push(`${path}#${data}`)
    props.onCancel()
  }


  let t = props.modalData
  let title, id, url;
  if (props.source === "youtube") {
    id = t.id.videoId
    url = `https://www.youtube.com/embed/${id}`
    title = t.snippet.title
  } else if (props.source === "vimeo") {
    id = t.uri.slice(8)
    url = `https://player.vimeo.com/video/${id}?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=189862`
    title = t.name
  }
  console.log(t, props.source)
  return (
    <Modal {...props}>
      <div className="">
        <div className="heading text--center mb-5">
          <h1 className="mx-2 text--primary text--bolder">Hijack</h1><span className="text--secondary">Hijack this Content</span>
        </div>
        <div className="modal--image">
          <iframe width="100%" height="100%" style={{ width: "100%", height: "100%" }} className="img-frame"
            src={url} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div className="btn--group" style={{ flexDirection: "column" }}>
          <button className="btn btn-outline-primary btn--round text--primary btn-modal" onClick={() => pushHandler("brand")}>Select Brand</button>
          <button className="btn btn-outline-primary btn--round text--primary btn-modal" onClick={() => pushHandler("message")}>Select Ad Content</button>
        </div>
      </div>
    </Modal>
  )
}

export default Hijack