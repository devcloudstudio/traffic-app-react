import React, { Fragment } from "react"

const Card = ({ setModal, showHandler }) => {

	const hijacked_videos = [
		{
			img: 'https://images.unsplash.com/photo-1611808786599-82da0b05969e?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=MXwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHw&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=400',
			description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit',
			date: '21 Jaunary 2013',
			seo: 'video seo'
		}
	]

	return (
		// <Fragment>
		// 	<div className="cards">
		// 		{
		// 			hijacked_videos.map((hijacked_video) => (
		// 				<div className="card" key={hijacked_video}>  {/*CARD START */}
		// 					<div className="img--container"><img alt="a" src={hijacked_video.img} /></div>
		// 					<div className="card--body">
		// 						<h4 className="text--white">{hijacked_video.description}</h4>
		// 						<div className="card-options d-flex">
		// 							<span className="text--secondary date">{hijacked_video.date}</span>
		// 							<div className="options"><span className="share"> <i className="text--primary fas fa-download"></i></span>
		// 								<button className="btn btn-primary m-card-btn"
		// 									onClick={() => {
		// 										setModal("videoseo")
		// 										showHandler()
		// 									}}
		// 								>Copy SEO Tags</button>
		// 							</div>
		// 						</div>
							
		// 					</div>
		// 				</div>
		// 			))}
		// 	</div>
		// </Fragment>
		<>
			<div className="youtube" id="bmVKaAV_7-A" src="https://images.unsplash.com/photo-1490143921278-d853145e4977?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80" style={{width: 500, height: 294}} />

		</>
	)
}
export default Card