import React, { Fragment, useState } from "react"
import { Link } from "react-router-dom"
import LoginForm from '../../Components/Forms/LoginForm'
import { useDispatch } from 'react-redux'
import { loginUser } from '../../Redux/actions/userActions'
import { Loader } from "../../Components/Layout/Loader"

const Login = (props) => {
	const dispatch = useDispatch()
	const [isLoading, setIsLoading] = useState(false);

	const userSubmit = data => {
		setIsLoading(true)
		setTimeout(() => {
			setIsLoading(false)
		}, 3000)
		dispatch(loginUser(data)).then(() => props.history.push('/dashboard'))
	}

	return (
		<Fragment>
			<LoginForm submit={userSubmit} />
			{isLoading && <Loader />}
		</Fragment>
	)
}
export default Login