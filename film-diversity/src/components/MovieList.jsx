import React from "react"
import MovieButton from "./MovieButton"

function MovieList(props) {

    return(
        <div className="movie-list">
            <p>This will render a list of movies.</p>
            <MovieButton />
        </div>
    )
}

export default MovieList