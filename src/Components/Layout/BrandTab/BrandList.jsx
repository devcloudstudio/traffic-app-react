import React, { Fragment, useEffect, useState, useRef } from "react"
import { getBrands } from '../../../Redux/actions/userActions'
import { useDispatch, useSelector } from 'react-redux'
import { Loader } from "../Loader"
import ls from 'localstorage-ttl'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const BrandList = ({ setModal, showHandler, query }) => {
	const [isLoading, setIsLoading] = useState(true)

	const dispatch = useDispatch()

	useEffect(() => {
		setIsLoading(false)
	}, [])

	const listsRef = useRef(new Array())
	const brands = useSelector((state) => state.brands) || []
	/*const brands = [
		{ _id: 0, name: 'Wick', slogan: `Don't touch my dog`, avatar: 'https://www.fivesquid.com/pics/t2/1578676465-129095-1-1_236px.jpg' },
		{ _id: 1, name: 'Bros', slogan: `In bros we trust`, avatar: 'https://yt3.ggpht.com/ytc/AAUvwniQL9QXGfvN7wAn-lPcmmzYl4ZUzWt8_8dQE3w_Uw=s900-c-k-c0x00ffffff-no-rj' },
		{ _id: 2, name: 'MTN', slogan: `Everywhere you go`, avatar: '../../../mock/img/brands/avatar.jpg' },]*/

	const brandSelected = (id) => {
		const r = window.confirm('save this brand')
		if (r === true) {
			if (!ls.get(`brand`, id, 600000)) {
				ls.set(`brand`, id, 600000)
			} else if (ls.get(`brand`)) {
				const y = window.confirm('there is already a brand saved, want to save another?')
				if (y === true) {
					localStorage.removeItem(`brand`)
					ls.set(`brand`, id, 600000)
				}
				return false
			}
		}
	}


	return (
		<Fragment>
			<h1 className="text--white brand-heading">Your Saved Brands</h1>
			<div className="cards">

				{brands && brands.map((brand, index) => {

					const getRef = (element) => (listsRef.current.push(element))
					const bool = query.get("brand") === `brand${index}`

					return (
						<div className={`brand-card stat-card ${query.get("brand") === `brand${index}` ? "active" : ""}`} key={index} id={`#brand${index}`} ref={getRef}>  {/*CARD START */}
							<div className="card--body">
								<div className="brand-card-topbar justify-content-center">
									<div>
										<img src={brand.avatar} className="brand-img" />
									</div>
									<h3 className="text--white">{brand.name}</h3>
								</div>
								<p className="text--white brand-slogan">{brand.slogan}</p>
								<div className="brand-options">
									<span className="brand-card-btn brand-btn-primary brand-icon"><i class="far fa-edit"></i></span>
									<span className="brand-card-btn brand-btn-delete brand-icon" onclick={() => alert('deleting')}><i class="far fa-trash-alt"></i></span>
									<span className="brand-card-btn brand-btn-delete brand-icon" onClick={() => brandSelected(brand._id)}><i class="fa fa-eye"></i></span>
								</div>
							</div>
						</div>
					)
				})}

				{isLoading && <Loader />}

			</div>
		</Fragment>
	)
}
export default BrandList
