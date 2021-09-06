import React, { useEffect, useState } from "react"
import Videos from "./Videos"
import axios from 'axios'
import { Loader } from '../../Components/Layout/Loader'
import ls from 'localstorage-ttl'
import Share from "./Modal/Share"
import Hijack from "./Modal/Hijack"
import StatGrid from "../Stat/StatGrid"
import NavBarRight from "../../Components/NavBarRight"

const Dashboard = (props) => {

	const [isLoading, setIsLoading] = useState(true)
	const [stats, setStats] = useState({})

	useEffect(() => {

		async function fetchStats(){
			const { data } = await axios.get(`https://traffic-application.herokuapp.com/api/user/activity/stats/hijack`, {
				headers:{
					Authorization: `Bearer: ${localStorage.getItem('user-token')}`
				}
			})

			setIsLoading(false)
			setStats(data)
		}

		// async function fetchArticles() {
		// 	setIsLoading(true)
		// 	const response = [
		// 		{
		// 			"title": 10,
		// 			"desc": 20,
		// 			"link": 50,
		// 			"img": 80
		// 		},
		// 		{
		// 			"title": 50,
		// 			"desc": 20,
		// 			"link": 50,
		// 			"img": 80
		// 		},
		// 		{
		// 			"title": 60,
		// 			"desc": 20,
		// 			"link": 50,
		// 			"img": 80
		// 		},
		// 		{
		// 			"title": 5,
		// 			"desc": 20,
		// 			"link": 50,
		// 			"img": 80
		// 		},
		// 		{
		// 			"title": 54,
		// 			"desc": 20,
		// 			"link": 50,
		// 			"img": 80
		// 		},
		// 		{
		// 			"title": 45,
		// 			"desc": 20,
		// 			"link": 50,
		// 			"img": 80
		// 		},
		// 	]
		// 	setIsLoading(false)
		// 	setStats(response)
		// }

		/*async function fetchArticles() {
			if (ls.get('articles')) {
				setIsLoading(true)
				const response = ls.get('articles')
				setIsLoading(false)
				setStats(response)
				console.log(response)
			} else {
				setIsLoading(true)
				try {
					const { data } = await axios.get('https://googlenewsscraper.herokuapp.com/topstories')
					ls.set('articles', data, 86400000)
					setIsLoading(false)
					setStats(data)
				} catch (err) {
					console.log(err.message)
				}
			}
		}*/

		//fetchArticles()
		fetchStats()
	}, []);


	


	const [show, setShow] = useState(false)
	const [tab, setTab] = useState(null)
	const [modal, setModal] = useState(null)

	let [modalData, setModalData] = useState(null)

	// let hash = window.location.hash
	const onCancel = () => {
		console.log("Close Modal")
		setShow(false)
	}
	const showHandler = () => {
		console.log("show Modal")
		setShow(true)
	}


	const hijacked = stats?.hijacks
	const messages = stats?.user_messages
	const user_brands = stats?.user_brands

	const hijackedTitle = hijacked?.title || ''
	const hijackedLength = hijacked?.amount || ''
	
	const messagesTitle = messages?.title || ''
	const messageAmount = messages?.amount || ''

	const brandTitle = user_brands?.title || ''
	const brandLength = user_brands?.amount || ''


	return (
		<>
			{modal === "Share" ? <Share modalData={modalData} show={show} rightBtnContent="Done" leftBtnContent="Back" onCancel={onCancel} /> : null}
			{modal === "Hijack" ? <Hijack stats={stats} modalData={modalData} modalData={modalData} show={show} showHandler={showHandler} setModal={setModal} onCancel={onCancel} /> : null}


			<section className="right">

				<div className="container mx-2">
					{/*Navbar*/}
					<div className="navbar my-2">
						<ul className="d-flex list-item-group nav nav-left border">
							<li className="list-item">
								{/* <div className="form--container">
									<input className="nav-form" type="text" placeholder="search by keywords" /><i className="fas fa-search"></i>
								</div> */}
							</li>
						</ul>
						<NavBarRight />
					</div>

					<StatGrid hijackedTitle={hijackedTitle} 
						hijackedLength={hijackedLength}	
					/>
					{isLoading && <Loader />}

				</div>
				
			</section>
			{/*Dashboard*/}
		</>
	)
}

export default Dashboard