import React,{Fragment} from "react"
import SignupForm from "../../Components/Forms/SignupForm"
import { registerUser } from '../../Redux/actions/userActions'
import { useDispatch } from 'react-redux'

const SignUp = (props)=>{
	const dispatch = useDispatch()

	const submit = data =>  dispatch(registerUser(data)).then(() => props.history.push('/dashboard'))

	return(
     <Fragment>
		 <SignupForm submit={submit} /> 
     </Fragment>
	)
}
export default SignUp