import React, { useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { getHiJacks } from "../../../Redux/actions/userActions";

const Card = ({ setModal, showHandler, setModalData }) => {
	const hijackedData = useSelector(state => state.hijacks.hijacked_content) || []

	// const dispatch = useDispatch();
	// useEffect(() => {
	// 	dispatch(getHiJacks())
	// }, [])

	return (
		<>
			<div className="cards">
				{hijackedData.map((article) => (
					<div className="card" style={{ position: 'relative' }}> {/*CARD Start */}
						<div style={{ display: 'flex', flexDirection: 'row' }}>
							<div><img className="hijack-card-brand-img" alt="a" src={article.brand_img} /></div>
							<h4 className="text--white" style={{ margin: "5px" }}>{article.title}</h4>
						</div>
						<div style={{ border: 'none' }} className="img--container hijack-card-trend-img"><img alt="a" src={article.trend_img} /></div>
						<div className="card--body">
							<div className="card-options d-flex">
								<span className="text--secondary date">{article.date}</span>
								<div className="options" ><span className="share" onClick={() => {
									setModal(article.link)
									showHandler()
								}}> <i className="text--primary fas fa-share-alt"></i></span>
									{/* <button className="btn btn-outline-primary text--primary m-card-btn" onClick={() => {
										setModal("Hijack")
										setModalData(article)
										showHandler()
									}}>Hijack</button> */}
									<button className="btn btn-primary m-card-btn" onClick={() => {
										// setModal("ContentPreview")
										// setModalData(article)
										// showHandler()
										window.open(`http://localhost:3000/post/article/${article.id}`, "_blank")
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