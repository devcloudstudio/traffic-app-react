import React, { Fragment, useState } from "react"
import useWindowDimensions from '../../Hooks/useWindowDimensions'
import { Link, useLocation } from "react-router-dom"
import { useSelector } from 'react-redux'


const Sidebar = ({ lightMode, setLightMode }) => {
	const location = useLocation()
	const { height, width } = useWindowDimensions();
	const user = useSelector(state => state.profile) || {}

	var style = {
		left: !lightMode ? "-4%" : "50%"
	}

	const content = (
		<section className="left sidebar">
			<div className="left--wrapper">
				<div className="logo">Traffik Pilot</div>
				<div className="user--details">
					<div className="user-image--container"><img alt="a" className="user-image" src={user.avatar ? user.avatar : 'https://i.ibb.co/9ycTC57/image-2021-07-07-165600.png'} /></div>
					{/* <div className="user-image--container"><img alt="a" className="user-image" src={user.avatar ? user.avatar : 'https://www.fivesquid.com/pics/t2/1578676465-129095-1-1_236px.jpg'} /></div> */}
					<div className="user--info"><span className="fullName text--secondary text--bolder">{user.name ? user.name : 'Name:'}</span><span className="username text--secondary text--light">{user.username ? user.name : 'username:'}</span></div>
				</div>
				<ul className="list-item-group sidebar--options">
					<li className={`list-item ${location.pathname === "/dashboard" ? 'active' : ""}`}><Link className="link sidebar-list-link" to="/"> <span className="icon"><i className="fas fa-th-large"></i></span><span className="name">Dashboard</span></Link></li>
					{/*<li className={`list-item ${location.pathname === "/bonus" ? 'active' : "" }`}><Link className="link sidebar-list-link" to="/bonus"> <span className="icon"><i className="fas fa-user"></i></span><span className="name">Bonus</span></Link></li>
		        <li className={`list-item ${location.pathname === "/trannings" ? 'active' : "" }`}><Link className="link sidebar-list-link" to="/trannings"> <span className="icon"><i className="fas fa-user"></i></span><span className="name">Trainings</span></Link></li>*/}
					<li className={`list-item ${location.pathname === "/trend" ? 'active' : ""}`}><Link className="link sidebar-list-link" to="/trend"> <span className="icon"><i className="fas fa-fire"></i></span><span className="name">Hot Traffic Hijacker</span></Link></li>
					<li className={`list-item ${location.pathname === "/videos" ? 'active' : ""}`}><Link className="link sidebar-list-link" to="/videos"> <span className="icon"><i className="fas fa-play-circle"></i></span><span className="name">Video Traffic Machine</span></Link></li>
					<li className={`list-item ${location.pathname === "/profile" ? 'active' : ""}`}><Link className="link sidebar-list-link" to="/profile"> <span className="icon"><i className="fas fa-user"></i></span><span className="name">Profile</span></Link></li>
					<li className={`list-item ${location.pathname === "/logout" ? 'active' : ""}`}><Link className="link sidebar-list-link" to="/logout"> <span className="icon"><i className="fas fa-sign-out-alt"></i></span><span className="name">Logout</span></Link></li>
				</ul>
				<div className="toggle">
					<div className="slide" style={style}></div>
					<div className="toggle-wrapper">
						<span className="text btn" onClick={() => setLightMode(false)}>Dark</span>
						<span className="text btn" onClick={() => setLightMode(true)}>LIGHT</span>
					</div>
				</div>
			</div>
		</section>
	)


	const mbContent = (
		<section className="bottom mb-sidebar">
			<div className="bottom--wrapper">
				<ul className="list-item-group bottom--options">
					<li className={`list-item ${location.pathname === "/dashboard" ? 'active' : ""}`}><Link className="link bottom-list-link" to="/"> <span className="icon"><i className="fas fa-th-large"></i></span></Link></li>
					<li className={`list-item ${location.pathname === "/trend" ? 'active' : ""}`}><Link className="link bottom-list-link" to="/trend"> <span className="icon"><i className="fas fa-fire"></i></span></Link></li>
					<li className={`list-item`}>
						{/*<Link className="link bottom-list-link" to="/profile">*/}
						<div className="user-image--container">
							<img className="user-image" src={user.avatar ? user.avatar : 'https://i.ibb.co/9ycTC57/image-2021-07-07-165600.png'} />
						</div>
						{/*</Link>*/}
					</li>
					<li className={`list-item ${location.pathname === "/videos" ? 'active' : ""}`}><Link className="link bottom-list-link" to="/videos"> <span className="icon"><i className="fas fa-play-circle"></i></span></Link></li>
					<li className={`list-item ${location.pathname === "/profile" ? 'active' : ""}`}><Link className="link bottom-list-link" to="/profile"> <span className="icon"><i className="fas fa-user"></i></span></Link></li>
				</ul>

			</div>
		</section>
	)

	return (
		<Fragment>
			{width <= 768 ? mbContent : content}
		</Fragment>
	)
}

export default Sidebar