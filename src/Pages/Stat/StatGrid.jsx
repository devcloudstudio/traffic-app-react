import React, { Fragment, useState } from "react"
import StatCard from "../Stat/Card/StatCard";

const StatGrid = ({ stats, setModal, showHandler, setModalData }) => {

   return (
      <Fragment>

         <h2 className="text--white mx-2">Stats</h2>
         <div className="cards">
            {stats && stats.map(stat => (
               <StatCard key={stat.title} t={stat} setModal={setModal} setModalData={setModalData} showHandler={showHandler} />
            ))}
         </div>
      </Fragment>
   )
}

export default StatGrid