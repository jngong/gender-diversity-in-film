import React from "react"

function MovieButton(props) {
    const {id, title} = props.movie
    return(
            <div className="movie-button">
                <h2>{title}</h2>
            </div>        
    )
}

export default MovieButton

/* 
Image base URL for poster: https://image.tmdb.org/t/p/w185/
*/