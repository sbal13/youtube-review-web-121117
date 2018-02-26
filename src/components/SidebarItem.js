import React from 'react'

const SidebarItem = (props) => {

	const handleChangeVideo = (event) => {
		props.changeVideo(props.video)
	}

	const thumbnail = props.video.snippet.thumbnails.default.url
	const title = props.video.snippet.title


	return (
		<div onClick={handleChangeVideo}>
			<img src={thumbnail} alt={title}/>
			<strong>{title}</strong>
		</div>
	)
}

export default SidebarItem