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
            maleCrew: null,
            unknownCast: null,
            unknownCrew: null
        }
    }

    async componentDidMount() {
        const data = await getMovieDetails(this.props.match.params.film_id)
        this.setState({
            currentMovie: data
        })
        this.filterCredits(data)
    }

    filterCredits = (data) => {
        const femaleCast = data.credits.cast.filter(member => member.gender == 1)
        const maleCast = data.credits.cast.filter(member => member.gender == 2)
        const unknownCast = data.credits.cast.filter(member => member.gender == 0)
        const femaleCrew = data.credits.crew.filter(member => member.gender == 1)
        const maleCrew = data.credits.crew.filter(member => member.gender == 2)
        const unknownCrew = data.credits.crew.filter(member => member.gender == 0)

        this.setState({
            femaleCast: femaleCast,
            maleCast: maleCast,
            femaleCrew: femaleCrew,
            maleCrew: maleCrew,
            unknownCast: unknownCast,
            unknownCrew: unknownCrew
        })
        
    }

    render() {
        while (this.state.currentMovie === null) {
            return <div>Loading film details...</div>
        }
        return(
            <div className="movie-details">
                <div className="movie-header">
                    <h1>
                        {this.state.currentMovie.title} ({new Date(this.state.currentMovie.release_date).getFullYear()})
                    </h1>
                     <p>Budget: {this.state.currentMovie.budget}  |  Revenue: {this.state.currentMovie.revenue}</p>
                </div> 

                <div className="movie-gender-summary">
                    <GenderSummary currentMovie={this.state.currentMovie}/>
                    <BechdelTest currentMovie={this.state.currentMovie} />
                </div>

                <CreditsList 
                    currentMovie={this.state.currentMovie} 
                    femaleCast={this.state.femaleCast} 
                    maleCast={this.state.maleCast}
                    femaleCrew={this.state.femaleCrew}
                    maleCrew={this.state.maleCrew}
                    unknownCast={this.state.unknownCast}
                    unknownCrew={this.state.unknownCrew}
                />

            </div> /* End of movie details div */
            )
    }

}
export default MovieDetails

/* 
Image URL base for backdrop: https://image.tmdb.org/t/p/w1280/
*/