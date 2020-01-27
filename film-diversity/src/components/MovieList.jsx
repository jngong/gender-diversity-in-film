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
        <div className="movie-list">
            {props.movieList && props.movieList.map((movie, i) => {
                return (i < 10) && <Link to={`/${movie.id}`} key={movie.id}><MovieButton movie={movie}/></Link>
            })}
        </div>
    )

}

export default MovieList