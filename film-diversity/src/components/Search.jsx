import React from "react"

function Search(props) {
    return(
        <form onSubmit={props.handleSubmit}>
            <input 
                type="text" 
                placeholder="Search by film title..."
                autoComplete="off"
                name="searchFilm"
                value={props.searchTerm}
                onChange={props.handleChange}
            />    
            <button>Find Film</button>
        </form>
    )
}

export default Search