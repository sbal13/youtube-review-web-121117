import React from 'react'
import Search from './Search'

const NavBar = (props) => {
	return (
		<div>
			<Search searchTerm={props.searchTerm} 
					handleSearchTerm={props.handleSearchTerm}/>
			<button onClick={props.handleClick}>Search</button>
		</div>
	)
}

export default NavBar