import React,{Fragment} from "react"

const Card = ({setModal,showHandler})=>{
	return(
     <Fragment>
     <div className="cards">
       {
       	[...Array(10)].map((i)=>(
          <div className="card" key={i}>  {/*CARD START */}
		      <div className="img--container"><img alt="a" src="https://images.unsplash.com/photo-1611808786599-82da0b05969e?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=MXwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHw&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=400"/></div>
		      <div className="card--body">
		        <h4 className="text--white">Lorem ipsum dolor sit amet consectetur, adipisicing elit</h4>
		        <div className="card-options d-flex">
		        <span className="text--secondary date">21 Jaunary 2013</span>
		          <div className="options"><span className="share"> <i className="text--primary fas fa-download"></i></span>
		            {/*<button className="btn btn-outline-primary text--primary m-card-btn">Hijack</button>*/}
		            <button className="btn btn-primary m-card-btn" 
		             onClick={()=>{
		            	setModal("videoseo") 
		            	showHandler()
		             }}
		            >Copy SEO Tags</button>
		          </div>
		        </div>
		       {/* <div className="card-footer">
		       	          <p className="footer--text text--secondary">Lorem ipsum dolor sit ata, placeat ea. Sit labore perferendis optio, corporis natur non natus.</p>
		       	 </div> */}
		      </div> 
	    </div>
       	))}   
	   </div>
     </Fragment>
	)
}
export default Card