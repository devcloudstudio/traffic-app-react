import React,{Fragment,useState,useEffect} from "react"
import {useLocation} from "react-router-dom"
import axios from "axios"
import { useDispatch } from 'react-redux'
import ls from 'localstorage-ttl'


// AdsContent Modals
import { Loader } from "../../Components/Layout/Loader";
import { getBrands, getLeads, getMessages } from "../../Redux/actions/userActions";

const Stat = (props)=>{
  
  const [show,setShow] = useState(false)
  const [modal,setModal] = useState(null)
  const [isLoading, setIsLoading] = useState(false)


    /*let {hash} = useLocation()
    useEffect(() => {
     setTab(hash.split("?")[0].substring(1))
    }, [hash])

const dispatch = useDispatch()
    
	useEffect(() => {
		 dispatch(getBrands())
     dispatch(getMessages())
     dispatch(getLeads())
	}, [])*/


  return(
    <Fragment>
        <section className="right">
            <div className="container mx-2">
               {isLoading && <Loader />}
            </div>
      </section>
  </Fragment>
  )
}
export default Stat