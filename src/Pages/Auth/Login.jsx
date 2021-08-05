import React,{Fragment} from "react"
import {Link} from "react-router-dom"
import LoginForm from '../../Components/Forms/LoginForm'
import { useDispatch } from 'react-redux'
import {loginUser } from '../../Redux/actions/userActions'


const Login = (props)=>{
	const dispatch = useDispatch()
	
	const userSubmit = data =>  dispatch(loginUser(data)).then(() => props.history.push('/dashboard'))

	return(
     <Fragment>
		 <LoginForm submit={userSubmit} />
	 
     </Fragment>
	)
}
export default Login