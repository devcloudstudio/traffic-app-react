import React, { Fragment, useState } from "react"
import { Link, useLocation, useRouteMatch } from "react-router-dom"

const Tab = ({ tab, setTab }) => {
	const location = useLocation()
	const match = useRouteMatch().path;
	const url = window.location
	const path = location.pathname
	// console.log(url,location,match)

	const Home = (<li className={`nav-item  noselect ${tab === "" ? 'active' : null}`}>
		<Link to={`${match}`} className="anchor" >Home</Link>
	</li>)

	const adCont = (<li className={`nav-item  noselect ${tab === 'message' ? 'active' : null}`}>
		<Link to={`${match}#message`} className="anchor">Ad Content/Affiliate Link</Link>
	</li>)
	const con = (<li className={`nav-item  noselect ${tab === 'import' ? 'active' : null}`}>
		<Link to={`${match}#import`} className="anchor" >Import Channels</Link>
	</li>)
	const leads = (<li className={`nav-item  noselect ${tab === 'leads' ? 'active' : null}`}>
		<Link to={`${match}#leads`} className="anchor"  >Leads</Link>
	</li>)
	const thumbnail = (<li className={`nav-item  noselect ${tab === 'thumbnail' ? 'active' : null}`}>
		<Link to={`${match}#thumbnail`} className="anchor"  >Thumbnail</Link>
	</li>)
	const hijvid = (<li className={`nav-item  noselect ${tab === 'hijack' ? 'active' : null}`}>
		<Link to={`${match}#hijack`} className="anchor"  >Hijacked </Link>
	</li>)
	const brand = (<li className={`nav-item  noselect ${tab === 'brand' ? 'active' : null}`}>
		<Link to={`${match}#brand`} className="anchor"  >Your Brand</Link>
	</li>)
	return (
		<Fragment>
			<div className="my-2">
				<ul className="tabs nav">
					{Home}
					{path === "/videos" ? con : ""}

					{path !== "/videos" ? adCont : ""}

					{path !== "/videos" ? brand : ""}
					{path !== "/videos" ? leads : ""}

					{path === "/videos" ? thumbnail : ""}

					{hijvid}


				</ul>
			</div>
		</Fragment>
	)
}
export default Tab