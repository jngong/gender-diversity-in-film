import React, { Component } from "react"

import {getMovieDetails} from "../services/api-helper"
import CreditsList from "./CreditsList"
import GenderSummary from "./GenderSummary"
import BechdelTest from "./BechdelTest"

class MovieDetails extends Component {

    constructor(props) {
        super(props)
        this.state = {
            currentMovie: null,
            femaleCast: null,
            maleCast: null,
            femaleCrew: null,
            maleCrew: null
        }
    }

    async componentDidMount() {
        const data = await getMovieDetails(this.props.match.params.film_id)
        this.setState({
            currentMovie: data
        })
        this.filterCredits()
    }

    filterCredits = () => {
        const femaleCast = this.state.currentMovie.credits.cast.filter(member => member.gender === 1)
        const maleCast = this.state.currentMovie.credits.cast.filter(member => member.gender === 2)
        const femaleCrew = this.state.currentMovie.credits.crew.filter(member => member.gender === 1)
        const maleCrew = this.state.currentMovie.credits.crew.filter(member => member.gender === 1)

        this.setState({
            femaleCast: femaleCast,
            maleCast: maleCast,
            femaleCrew: femaleCrew,
            maleCrew: maleCrew
        })
        
    }

    render() {
        while (this.state.currentMovie === null) {
            return <div>Loading film details...</div>
        }
        return(
            <div className="movie-details">
                <h1>{this.state.currentMovie.title}</h1>
                <CreditsList currentMovie={this.state.currentMovie} femaleCast={this.state.femaleCast} maleCast={this.state.maleCast}/>
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