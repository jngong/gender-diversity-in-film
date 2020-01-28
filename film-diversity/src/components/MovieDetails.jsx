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

// * When component mounts, get movie details based on the url parameter, set state for currentMovie and run a filter of credits.
    async componentDidMount() {
        const data = await getMovieDetails(this.props.match.params.film_id)
        this.setState({
            currentMovie: data
        })
        this.filterCredits(data)
    }

//* Define a function to filter credits and set state for each category. This is invoked within the componentDidMount.
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
        if (this.state.currentMovie === null) {
            return <div>Loading film details...</div>
        }
        
//* Source for how to convert numbers via this link: https://www.geeksforgeeks.org/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript/
        function formatNumber(number) {
            const newNum = parseInt(number)
            return new Intl.NumberFormat('en-US').format(newNum)
        }

        const budget = formatNumber(this.state.currentMovie.budget)
        const revenue = formatNumber(this.state.currentMovie.revenue)
        
        return(
            <div className="movie-details">
                <div className="movie-header">
                    <h1>
                        {this.state.currentMovie.title} ({new Date(this.state.currentMovie.release_date).getFullYear()})
                    </h1>
                    <p style={{display : 'inline-block'}}>Budget: ${budget} </p> <p style={{display : 'inline-block'}}> Revenue: ${revenue}</p>
                </div> 

                <div className="movie-gender-summary">
                    <GenderSummary 
                        currentMovie={this.state.currentMovie}
                        femaleCast={this.state.femaleCast} 
                        maleCast={this.state.maleCast}
                        femaleCrew={this.state.femaleCrew}
                        maleCrew={this.state.maleCrew}
                    />
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