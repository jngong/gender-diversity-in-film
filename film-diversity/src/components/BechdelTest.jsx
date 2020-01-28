import React, {Component} from "react"
import {getBechdelTest} from "../services/api-helper"

/* // TODO: Need to do conditional rendering on the return. If there is no result from the API call, then the whole thing should return empty  */

class BechdelTest extends Component {
    constructor(props) {
        super(props)
        this.state = {
            bechdelRating: undefined
        }
    }

    async componentDidMount() {
        if (!this.props.currentMovie.imdb_id) {
            return
        }
        const cleanId = this.props.currentMovie.imdb_id.slice(2)
        const data = await getBechdelTest(cleanId)
        this.setState({
            bechdelRating: data.rating
        })
    }
    
    render(props) {

        if (this.state.bechdelRating !== undefined) {
            return(
                <div className="bechdel-test">
                <h3>Bechdel Test</h3>
                <p>{this.props.currentMovie.title} passes {this.state.bechdelRating && this.state.bechdelRating} out of 3 criteria.</p>
            </div>
            )
        } else {
            return null
        }
    }
}

export default BechdelTest