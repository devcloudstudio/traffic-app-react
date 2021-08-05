 import React,{Fragment} from "react"

const TrendingCard = ({t,setModal,showHandler,setModalData})=>{
	return(
     <Fragment>
        <div className="card p-relative">
	      <div className="img--container p-absolute">
	      <img alt="a" src={t.img} />
              <div className="p-absolute-content">
                  <span className="text--primary bg-secondary">{t.title}</span>
                  <span className="share bg-secondary" onClick={()=>{
                  	showHandler()
                  	setModal("Share")
                  	setModalData(t)
                  }}> <i className="text--primary fas fa-share-alt"></i></span>
				  <button style={{background: '#1b1b1b'}} className="btn btn-outline-primary bg-secondary text--primary m-card-btn" onClick={()=>{
					       	setModal("Hijack")
                        	showHandler()
	            }}>Hijack</button>
              </div>
	      </div>
	      <div className="card--body">
	        <h3 className="text--bolder text--white sm-text">{t.subtitle ? t.subtitle : t.title}</h3>
	        <div className="card-options"><span className="text--secondary">{t.time}</span></div>
	        <div className="">
	          <p className="footer--text text--secondary sm-text">{t.source}</p>
	        </div>
	      </div>
	    </div>
     </Fragment>
	)
}
export default TrendingCard