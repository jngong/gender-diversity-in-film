import React, { Component } from "react"

import {getMovieDetails} from "../services/api-helper"
import CastList from "./CastList"
import GenderSummary from "./GenderSummary"
import BechdelTest from "./BechdelTest"

class MovieDetails extends Component {

    constructor(props) {
        super(props)
        this.state = {
            currentMovie: null
        }
    }

    async componentDidMount() {
        const data = await getMovieDetails(this.props.match.params.film_id)
        this.setState({
            currentMovie: data
        })
    }

    render() {
        console.log(this.state.currentMovie)
        while (this.state.currentMovie === null) {
            return <div>Loading film details...</div>
        }
        return(
            <div className="movie-details">
                <h1>{this.state.currentMovie.title}</h1>
                <CastList currentMovie={this.state.currentMovie} />
                <GenderSummary currentMovie={this.state.currentMovie}/>
                <BechdelTest currentMovie={this.state.currentMovie} />
            </div>
            )
    }

}
export default MovieDetails

/* 
Image URL base for backdrop: https://image.tmdb.org/t/p/w1280/
*/