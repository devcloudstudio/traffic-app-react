import React from "react"

const Card = ({ setModal, showHandler }) => {
	const hijacked_articles = [
		{
			img: "https://images.unsplash.com/photo-1611808786599-82da0b05969e?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=MXwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHw&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=400",
			title: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit',
			date: '21 Jaunary 2013',
			link: '',
			description: 'Lorem ipsum dolor sit ata, placeat ea. Sit labore perferendis optio, corporis natur non natus.'
		},
		{
			img: "https://images.unsplash.com/photo-1611808786599-82da0b05969e?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=MXwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHw&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=400",
			title: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit',
			date: '21 Jaunary 2015',
			link: '',
			description: 'Lorem ipsum dolor sit ata, placeat ea. Sit labore perferendis optio, corporis natur non natus.'
		},
		{
			img: "https://images.unsplash.com/photo-1611808786599-82da0b05969e?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=MXwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHw&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=400",
			title: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit',
			date: '21 Jaunary 2013',
			link: '',
			description: 'Lorem ipsum dolor sit ata, placeat ea. Sit labore perferendis optio, corporis natur non natus.'
		},
		{
			img: "https://images.unsplash.com/photo-1611808786599-82da0b05969e?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=MXwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHw&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=400",
			title: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit',
			date: '21 Jaunary 2013',
			link: '',
			description: 'Lorem ipsum dolor sit ata, placeat ea. Sit labore perferendis optio, corporis natur non natus.'
		},
	]

	return (
		<>
			<div className="cards">
				{hijacked_articles.map((article) => (
					<div className="card"> {/*CARD Start */}
						<div className="img--container"><img alt="a" src={article.img} /></div>
						<div className="card--body">
							<h4 className="text--white">{article.title}</h4>
							<div className="card-options d-flex">
								<span className="text--secondary date">{article.date}</span>
								<div className="options" ><span className="share" onClick={() => {
									setModal(article.link)
									showHandler()
								}}> <i className="text--primary fas fa-share-alt"></i></span>
									<button className="btn btn-outline-primary text--primary m-card-btn" onClick={() => {
										setModal("Hijack")
										showHandler()
									}}>Hijack</button>
									<button className="btn btn-primary m-card-btn" onClick={() => {
										setModal("ContentPreview")
										showHandler()
									}}><span className="fa fa-eye"></span></button>
								</div>
							</div>
							<div className="card-footer">
								<p className="footer--text text--secondary">Lorem ipsum dolor sit ata, placeat ea. Sit labore perferendis optio, corporis natur non natus.</p>
							</div>
						</div>
					</div> /*CARD End */
				))}
			</div>
		</>
	)
}
export default Card