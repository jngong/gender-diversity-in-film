import React from "react"
import MovieButton from "./MovieButton"
import {Link} from "react-router-dom"

function MovieList(props) {

    return (
        <div className="movie-list">
            {props.movieList && props.movieList.map((movie, i) => {
                return (i < 10) && <Link to={`/${movie.id}`} ><MovieButton key={i} movie={movie}/></Link>
            })}
        </div>
    )

}

export default MovieList