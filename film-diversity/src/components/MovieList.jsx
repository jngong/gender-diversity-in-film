import React from "react"
import MovieButton from "./MovieButton"

function MovieList(props) {

    const movies = props.movieList && props.movieList.splice(0, 10).map((movie) => { 
        return (
            <div>
                <h1>{movie.title}</h1>
            </div>
        )

    })

    return (
        <div className="movie-list">
            {movies}
            {/* <MovieButton /> */}
        </div>
    )
}

export default MovieList