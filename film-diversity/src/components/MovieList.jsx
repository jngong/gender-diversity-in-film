import React from "react"
import MovieButton from "./MovieButton"

function MovieList(props) {

    return (
        <div className="movie-list">
            {props.movieList && props.movieList.map((movie, i) => (
                i < 10 && <h1 key={i}>{movie.title}</h1>
                // <MovieButton />
            ))}
        </div>
    )

}

export default MovieList