import React from "react"

function Search(props) {

    // if (props.location)
    return(
        <div className="search-bar">
            <form onSubmit={props.handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Search by film title..."
                    autoComplete="off"
                    name="searchFilm"
                    value={props.searchTerm}
                    onChange={props.handleChange}
                />    
                <button>Get Results</button>
            </form>
            <button onClick={props.clearSearch} >Clear Search</button>
        </div>

    )
}

export default Search