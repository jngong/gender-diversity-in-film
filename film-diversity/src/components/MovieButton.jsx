import React from "react"
import FilmImage from "../images/film-placeholder-185x278.png"

function MovieButton(props) {
    const {poster_path, title, release_date, id} = props.movie
    const imageURL = 'https://image.tmdb.org/t/p/w185/'
    const year = new Date(release_date).getFullYear()

    return(
            <div className="movie-button" onClick={() => {props.handleClick(id)}}>
                <img src={poster_path ? `${imageURL}${poster_path}` : `${FilmImage}`} alt={title}/>
                <h3>{title}</h3>
                <p> {release_date ? `(${year})` : null}</p>
            </div>        
    )
}

export default MovieButton

/* 
Image base URL for poster: https://image.tmdb.org/t/p/w185/
*/