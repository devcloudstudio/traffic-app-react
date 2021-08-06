import React from "react"
import { useHistory, useRouteMatch } from "react-router-dom"
import Modal from "../../../Components/Modal/Modal"

const CardPreview = (props) => {
  const { push } = useHistory()
  const { path } = useRouteMatch()
  let t = props.modalData

  let title, id, url, description;
  console.log("t:-", t)
  if (props.source === "youtube" && t !== null) {
    id = t.id.videoId
    url = `https://www.youtube.com/embed/${id}`
    title = t.snippet.title
    description = t.snippet.description;
    t = null
  } else if (props.source === "vimeo" && t !== null) {
    id = t.uri?.slice(8) || ""
    url = `https://player.vimeo.com/video/${id}?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=189862`
    title = t.name
    description = t.description
    t = null
  }

  const pushHandler = () => {
    push(`${path}#thumbnail`)
    props.onCancel()
  }

  return (
    <Modal {...props} leftBtnContent="Cancel" rightBtnContent="Publish">
      <div className="">
        <div className="heading text--center mb-5"></div>
        <div className="">
          <iframe width="100%" height="100%" style={{ width: "100%", height: "100%" }} className="img-frame"
            src={url} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

        </div>
        <div className="my-2">
          <p className="text--white"><strong>video title: </strong> <span className="text--light">{title !== null ? title : " "}</span></p>
          <p className="text--white"><strong>Description:  </strong> <span className="text--light">{description}</span></p>
        </div>

        <div className="btn--group" style={{ flexDirection: "column" }}>
          <button className="btn btn-outline-primary  btn--round text--primary btn-modal" onClick={pushHandler}>Select Thumbnail</button>
          <button className="btn btn-primary btn--round text--primary btn-modal" onClick={() => {
            props.showHandler()
            props.setModal("Share")
          }}>Select Hot Traffic sources</button>
        </div>
      </div>
    </Modal>
  )
}

export default CardPreview