import React from 'react'
import NavBar from '../components/NavBar'
import CurrentVideo from '../components/CurrentVideo'
import Sidebar from './Sidebar'
import keys from '../keys'
import lodash from 'lodash'

class YoutubeContainer extends React.Component {

	state = {
		searchTerm: "puppies",
		videos: [],
		currentVideo: {}
	}

	handleSearchTerm = (event) => {
		this.setState({
			searchTerm: event.target.value
		}, this.fetchVideos)
	}

	componentDidMount(){
		this.fetchVideos()
	}

	fetchVideos = lodash.debounce(() => {
		fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&key=${keys.API_KEY}&q=${this.state.searchTerm}&type=video`)
		.then(res => res.json())
		.then(videos => {
			this.setState({
				videos: videos.items,
				currentVideo: videos.items[0]
			})
		})
	}, 1000)

	handleClick = (event) => {
		this.fetchVideos()
	}

	changeVideo = (video) => {
		this.setState({
			currentVideo: video
		})
	}



	render(){
		return (
			<div>
				<NavBar searchTerm={this.state.searchTerm} 
					   handleSearchTerm={this.handleSearchTerm}
					   handleClick={this.handleClick}/>
				<CurrentVideo video={this.state.currentVideo}/>
				<Sidebar videos={this.state.videos}
						 changeVideo={this.changeVideo}/>
			</div>
		)
	}
}

export default YoutubeContainer

//https://www.googleapis.com/youtube/v3/search?part=snippet&key=${keys.API_KEY}&q=${this.state.searchTerm}&type=video