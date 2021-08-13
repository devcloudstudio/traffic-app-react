import React,{Fragment, useState} from "react"
import { useSelector } from 'react-redux'

const Card = ({setModal,showHandler})=>{

	const hijackedData = useSelector(state => state.hijacks.hijacked_content)  || []

	console.log(hijackedData)
	return(
     <Fragment>
     <div className="cards">
		{hijackedData.map(trend => (
			<>
				 <div className="card"> {/*CARD Start */}
	      <div className="img--container"><img alt="a" src={trend.trend_img}/></div>
		  <div className="">
			  <p className="text--white">My brand</p>
			  <img className="ads-avatar" alt="brand" src={trend.brand_img}/>
		  </div>
	      <div className="card--body">
	        <h4 className="text--white">{trend.title}</h4>
	        <div className="card-options d-flex">
	        <span className="text--secondary date">21 Jaunary 2013</span>
	          <div className="options" ><span className="share"  onClick={()=>{
	            	setModal("ContentLink")
	            	showHandler()
	            }}> <i className="text--primary fas fa-share-alt"></i></span>
	            {/* <button className="btn btn-outline-primary text--primary m-card-btn" onClick={()=>{
	            	setModal("Hijack")
	            	showHandler()
	            }}>Hijack</button> */}
	            <button className="btn btn-primary m-card-btn" onClick={()=>{
	            	setModal("ContentPreview")
	            	showHandler()
	            }}>View</button>
	          </div>
	        </div>
	        <div className="card-footer">
	          <p className="footer--text text--white"> {trend.message}</p>
	        </div>
	      </div>
	    </div> {/*CARD End */}
			</>
		))} 
	 </div>
     </Fragment>
	)
}
export default Card