import React from 'react'

const CurrentVideo = (props) => {

	if (props.video.id){
		return (
			<div>
				<h3>{props.video.snippet.title}</h3>
				<iframe title={props.video.snippet.title}src={`https://www.youtube.com/embed/${props.video.id.videoId}`}/>
				<p>{props.video.snippet.description}</p>
			</div>
		)
	} else {
		return <h1>Loading</h1>
	}

	
}

export default CurrentVideo


// `https://www.youtube.com/embed/${videoId}`;
