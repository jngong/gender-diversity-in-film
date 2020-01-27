import React from "react"
import MovieButton from "./MovieButton"
import {Link} from "react-router-dom"

function MovieList(props) {
    if (!props.searchList.length && !props.movieList.length) {
        return (
            <div>
                No movies to display.
            </div>
        )
    }
    
    return (
        <div>
            <div className="movie-list">
                {props.searchList.results && props.searchList.results.map((movie, i) => {
                    return (i < 5) && <Link to={`${movie.id}`}> <MovieButton movie={movie} /> </Link>
                })}

            </div>
            <div className="movie-list">
                {props.movieList && props.movieList.map((movie, i) => {
                    return (i < 10) && <Link to={`/${movie.id}`} key={movie.id}><MovieButton movie={movie}/></Link>
                })}
            </div>
        </div>
    )

}

export default MovieList