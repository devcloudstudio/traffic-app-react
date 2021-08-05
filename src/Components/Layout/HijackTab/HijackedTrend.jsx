import React,{Fragment} from "react"
import Cards from "../../card/Cards"
import HijackModal from "./HijackModal"
const HijackedTrend =()=>{
	return (
	  <Fragment>
	    <HijackModal/>
	 	<Cards/>
      </Fragment>
    )
}
export default HijackedTrend