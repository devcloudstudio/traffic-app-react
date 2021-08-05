import React,{useState} from "react"
import Modal from "../../../Components/Modal/Modal"

const ContentPreview = (props)=>{
    let t = props.modalData    
    
    let title,id,url;
    if(props.source==="youtube"){
      id = t.id.videoId 
      url = `https://www.youtube.com/embed/${id}`
      title = t.snippet.title
      t = null
    }else if(props.source === "vimeo"){
      id = t.uri?.slice(8) || ""
      url = `https://player.vimeo.com/video/${id}?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=189862`
      title = t.name
      t = null
    }
   
  return(
         <Modal {...props}>
         <div className="">
            <div className="heading text--center mb-5">
              <h1 className="my-2 text--primary text--bolder">Content Preview</h1><span className="text--secondary">Content Preview with your Brand and messages</span>
            </div>
            <div className="modal-card-preview">
            <div className="modal--image">
                {/*<img src={t.image !==null ? t.image : "" } />*/}
                <iframe width="100%" height="100%" style={{width:"100%",height:"100%"}} className="img-frame" 
                src={url} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div className="card--body px-2">
          <h3 className="text--bolder text--white">{title !== null ? title : " "}</h3>
          <div className="card-options d-flex">
          {/*<span className="text--secondary py-2">{t.duration !== null ? t.duration : " "}</span>*/}
          </div>
          <div className="card-footer">
            {/*<p className="footer--text text--secondary">{t.subtitle !== null ? t.subtitle : " "}.</p>*/}
          </div>
        </div>
        </div>
         </div>
       </Modal>
  )
}

export default ContentPreview