import React from 'react'

const Search = (props) => {

	// const handleChange = (event) => {
	// 	props.handleSearchTerm(event.target.value)
	// }

	return (
		<div>
			<input value={props.searchTerm} onChange={props.handleSearchTerm}/>
		</div>
	)
}

export default Search