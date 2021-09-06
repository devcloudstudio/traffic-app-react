import React, { Fragment, useState } from "react"
import StatCard from "../Stat/Card/StatCard";

const StatGrid = ({hijackedTitle, messagesTitle, messageAmount, brandTitle, brandLength, hijackedLength, stats, setModal, showHandler, setModalData }) => {

   return (
      <Fragment>

         <h2 className="text--white mx-2">Stats</h2>
         <div className="cards">
          
               <StatCard hijackedTitle={hijackedTitle} hijackedLength={hijackedLength}  />
         
         </div>
      </Fragment>
   )
}

export default StatGrid