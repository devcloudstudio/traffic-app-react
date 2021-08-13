import React from "react";

export const Loader = ({ loading }) => {
  return (
    <div hidden={!loading} className='backdrop backdrop-loader'>
      <div className='lds-ring'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
