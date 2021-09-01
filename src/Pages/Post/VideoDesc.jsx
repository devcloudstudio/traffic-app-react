import React from 'react'


const VideoDesc = (props) => {
    return (
        <>
        <div className="youtube" id={props.match.params.id} src="" style={{width: 500, height: 294}} />
        </>
    )
}


export default VideoDesc
