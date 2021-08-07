import React, { useEffect, useRef } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { getMessages } from '../../../Redux/actions/userActions'
import { useLocation } from "react-router-dom"
import ls from 'localstorage-ttl'

const MessageList = ({ setModal, showHandler, query }) => {

	const listsRef = useRef(new Array())
	const messages = useSelector(state => state.messages) || []
	// const messages = [{style:"1",message:"1"},{style:"1",message:"1"},{style:"2",message:"3"},{style:"3",message:"5"}]


	const selectMessage = id => {
		const r = window.confirm('save this content')
		if (r === true) {
			if (!ls.get(`content`, id, 600000)) {
				ls.set(`content`, id, 600000)
			} else if (ls.get(`content`)) {
				const y = window.confirm(`There is an already content saved, want to save another?`)
				if (y === true) {
					localStorage.removeItem(`brand`)
					ls.set(`content`, id, 600000)
				}
				return false
			}
		}
	}

	return (
		<>
			<h1 className="text--white brand-heading">Ad Content List</h1>
			<div className="cards" style={{ padding: '10px' }}>
				{messages.map((m, index) => {
					const getRef = (element) => (listsRef.current.push(element))
					const bool = query.get("message") === `message${index}`

					return (
						<div className={`brand-card ${query.get("message") === `message${index}` ? "active" : ""}`} key={index} id={`#message${index}`} ref={getRef}>
							<div className="message-card--body card--body">
								<img src="https://i.ibb.co/m5823d0/Group-31.png" className="brand-img" />
								<div className="message-card-topbar justify-content-center">
									<h3 className="text--white">{m.style}</h3>
									<p className="text--white message-content">{m.message}</p>
									<button onClick={() => selectMessage(m._id)} className="-bg-secondary-color">Select</button>
								</div>
							</div>
							<div className="brand-options">
								<span className="btn btn-primary bg-secondary text--primary m-card-btn"><i class="far fa-edit"></i></span>
								<span className="btn btn-primary bg-secondary text--primary m-card-btn" onclick={() => alert('deleting')}><i class="far fa-trash-alt"></i></span>
								<span className="btn btn-primary bg-secondary text--primary m-card-btn"><i class="fa fa-eye"></i></span>
							</div>
						</div>
					)
				})}

			</div>
		</>
	)
}
export default MessageList
