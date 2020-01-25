import React from "react"

function MovieButton(props) {
    const {poster_path, title, id} = props.movie
    const imageURL = 'https://image.tmdb.org/t/p/w185/'

    return(
            <div className="movie-button" onClick={() => props.handleClick(id)}>
                <img src={`${imageURL}${poster_path}`} alt={title}/>
                <h2>{title}</h2>
            </div>        
    )
}

export default MovieButton

/* 
Image base URL for poster: https://image.tmdb.org/t/p/w185/
*/