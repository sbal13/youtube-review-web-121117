import React from 'react'
import SidebarItem from '../components/SidebarItem'

const Sidebar = (props) => {
	function createSidebarItems(){
		return props.videos.map(video => {
			return <SidebarItem key={video.id.videoId} 
							    changeVideo={props.changeVideo}
							    video={video}/>
		})
	}
	return (
		<div>
			{createSidebarItems()}
		</div>
	)
}

export default Sidebar