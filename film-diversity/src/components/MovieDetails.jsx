import React, { Component } from "react"
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

    render() {
        return(
            <div>
                <h1>This is the Movie Details component</h1>
                <CastList />
                <GenderSummary />
                <BechdelTest />
            </div>
        )
    }

}
export default MovieDetails

/* 
Image URL base for backdrop: https://image.tmdb.org/t/p/w1280/
*/