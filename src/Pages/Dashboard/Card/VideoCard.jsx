import React, { Fragment } from "react"

const VideoCard = () => {
	return (
		<Fragment>
			<div className="card">
				<div className="img--container"><img alt="video" src="https://images.unsplash.com/photo-1611808786599-82da0b05969e?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=MXwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHw&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=400" /></div>
				<div className="card--body">
					<h3 className="text--bolder text--white sm-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit</h3>
					<div className="card-options d-flex sm-text">
						<span className="text--secondary date">21 Jaunary 2013</span>
						<div className="options"><span className="share d-flex"> <i className="text--primary fas fa-share-alt"></i></span>
							<button className="btn btn-outline-primary text--primary  m-card-btn">Hijack</button>
							<button className="btn btn-primary  m-card-btn">Open</button>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	)
}
export default VideoCard