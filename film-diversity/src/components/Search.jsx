import React from "react"
import { withRouter } from "react-router-dom"

function Search(props) {

    if (props.location.pathname.match(`/${props.currentMovie}`) && props.match.isExact === false) {
        return null;
    }
    
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

export default withRouter(Search)