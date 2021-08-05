import React, { Fragment, useEffect, useState } from "react"
import Videos from "./Videos"
import axios from 'axios'
import { Loader } from '../../Components/Layout/Loader'
import ls from 'localstorage-ttl'
import Share from "./Modal/Share"
import Hijack from "./Modal/Hijack"
import StatGrid from "../Stat/StatGrid"

const Dashboard = (props) => {

	const [isLoading, setIsLoading] = useState(true)
	const [stats, setStats] = useState([])

	useEffect(() => {

		async function fetchArticles() {
			setIsLoading(true)
			const response = [
				{
					"title": 10,
					"desc": 20,
					"link": 50,
					"img": 80
				},
				{
					"title": 50,
					"desc": 20,
					"link": 50,
					"img": 80
				},
				{
					"title": 60,
					"desc": 20,
					"link": 50,
					"img": 80
				},
				{
					"title": 5,
					"desc": 20,
					"link": 50,
					"img": 80
				},
				{
					"title": 54,
					"desc": 20,
					"link": 50,
					"img": 80
				},
				{
					"title": 45,
					"desc": 20,
					"link": 50,
					"img": 80
				},
			]
			setIsLoading(false)
			setStats(response)
		}

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

		fetchArticles()
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


	return (
		<Fragment>

			{modal === "Share" ? <Share modalData={modalData} show={show} rightBtnContent="Done" leftBtnContent="Back" onCancel={onCancel} /> : null}
			{modal === "Hijack" ? <Hijack stats={stats} modalData={modalData} modalData={modalData} show={show} showHandler={showHandler} setModal={setModal} onCancel={onCancel} /> : null}


			<section className="right">

				<div className="container mx-2">
					{/*Navbar*/}
					<div className="navbar my-2">
						<ul className="d-flex list-item-group nav nav-left border">
							<li className="list-item">
								<div className="form--container">
									<input className="nav-form" type="text" placeholder="search by keywords" /><i className="fas fa-search"></i>
								</div>
							</li>
						</ul>
						<ul className="d-flex nav nav-right">
							<li className="list-item d-sm-none"><button className="btn btn-primary ">3.2k Leads Collected</button></li><i className="fas"></i>
							<li className="list-item d-sm-none"><button className="btn btn-primary">521 Video Hijacked</button></li>
							<li className="list-item"><span className="icon--container" onClick={() => props.setLightMode(!props.lightMode)}><i style={{ cursor: 'pointer' }} className={`fas ${props.lightMode ? 'fa-sun' : 'fa-moon'}`}></i></span></li>
							<li className="list-item transform-first"><span className="icon--container"><i style={{ cursor: 'pointer' }} className="fas fa-question-circle"></i></span></li>
							<li className="list-item transform-second"><span className="icon--container"><i style={{ cursor: 'pointer' }} className="fas fa-bell"></i></span></li>
							<li className="list-item nav--profile d-flex">
								<div className="nav-profile--container">
									<img className="profile--img" src="https://i.ibb.co/ckQ2jb8/profile.jpg" />
								</div>
								<span className="profile-name text--white d-sm-none">Name</span><i style={{ cursor: 'pointer' }} className="text--white fas fa-caret-down d-sm-none"></i>
							</li>
						</ul>
					</div>

					<StatGrid stats={stats} setModal={setModal} setModalData={setModalData} showHandler={showHandler} />
					{isLoading && <Loader />}

				</div>
			</section>
			{/*Dashboard*/}
		</Fragment>
	)
}

export default Dashboard