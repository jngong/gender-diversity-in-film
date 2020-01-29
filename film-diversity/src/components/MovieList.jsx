import React from "react"
import MovieButton from "./MovieButton"
import { Link } from "react-router-dom"

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
            <div className={`movie-list ${props.activeSearch ? '' : 'hide-list'}`}>
                <h2>Search Results</h2>
                {props.searchList.results && props.searchList.results.map((movie, i) => {
                    return (i < 10) && <Link to={`${movie.id}`} key={movie.id}> <MovieButton movie={movie} handleClick={props.handleClick} /> </Link>
                })}

            </div>
            <div className={`movie-list ${props.activeSearch ? 'hide-list' : ''}`}>
                <h2>Now Playing</h2>
                {props.movieList && props.movieList.map((movie, i) => {
                    return (i < 10) && <Link to={`/${movie.id}`} key={movie.id}><MovieButton movie={movie} handleClick={props.handleClick} /></Link>
                })}
            </div>
        </div>
    )

}

export default MovieList