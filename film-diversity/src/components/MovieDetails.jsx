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
        const femaleCast = data.credits.cast.filter(member => member.gender === 1)
        const maleCast = data.credits.cast.filter(member => member.gender === 2)
        const unknownCast = data.credits.cast.filter(member => member.gender === 0)

        const femaleCrew = data.credits.crew.filter(member => member.gender === 1)
        const maleCrew = data.credits.crew.filter(member => member.gender === 2)
        const unknownCrew = data.credits.crew.filter(member => member.gender === 0)

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
            
        const {title, budget, revenue, release_date, backdrop_path, tagline} = this.state.currentMovie

        //* Source for how to convert numbers via this link: https://www.geeksforgeeks.org/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript/
        function formatNumber(number) {
            const newNum = parseInt(number)
            return new Intl.NumberFormat('en-US').format(newNum)
        }

        const formattedBudget = formatNumber(budget)
        const formattedRevenue = formatNumber(revenue)
        
        const backdropBaseURL = 'https://image.tmdb.org/t/p/w1280/'
        return(
            <div className="movie-details">

                <div className="movie-header">

                    {backdrop_path ? <img src={`${backdropBaseURL}${backdrop_path}`} alt={title}/> : null}

                    <div className="movie-header-details">
                        <h1>{title} ({release_date ? `${new Date(release_date).getFullYear()}` : null})</h1>
                        <h4>{tagline}</h4>
                        {budget !== 0 ? <p>Budget: ${formattedBudget}</p> : null} 
                        {revenue !== 0 ? <p>Revenue: ${formattedRevenue}</p> : <p className="last"></p>}
                    </div> 
                </div>

                <div className="movie-gender-summary">
                    <h2>Gender Representation Summary</h2>
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