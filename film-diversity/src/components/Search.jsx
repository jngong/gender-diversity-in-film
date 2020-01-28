import React from "react"
import { withRouter } from "react-router-dom"

function Search(props) {

    if (props.location.pathname.match(`/${props.currentMovie}`) && props.match.isExact === false) {
        return null;
    }
    
    return(
        <div>
        <div className="description">
            <p>
                When in comes to gender parity in popular entertainment, Hollywood has a long way to go. An analysis of 2018's 100 highest-grossing films revealed that female characters only accounted for 36.2% of speaking time and 39% of screen time. 
                <br/><br/>                
                What does representation look like by each film?  Search or click on a movie below to get started.
            </p>
        </div>
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
            {props.activeSearch ? <button onClick={props.clearSearch}>Clear Search</button> : null}
        </div>
        </div>
    )
}

export default withRouter(Search)