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
		<Fragment>
			<div className="cards">
				{
					hijacked_videos.map((hijacked_video) => (
						<div className="card" key={hijacked_video}>  {/*CARD START */}
							<div className="img--container"><img alt="a" src={hijacked_video.img} /></div>
							<div className="card--body">
								<h4 className="text--white">{hijacked_video.description}</h4>
								<div className="card-options d-flex">
									<span className="text--secondary date">{hijacked_video.date}</span>
									<div className="options"><span className="share"> <i className="text--primary fas fa-download"></i></span>
										{/*<button className="btn btn-outline-primary text--primary m-card-btn">Hijack</button>*/}
										<button className="btn btn-primary m-card-btn"
											onClick={() => {
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