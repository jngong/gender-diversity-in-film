import React, {Component} from "react"
import {getBechdelTest} from "../services/api-helper"

class BechdelTest extends Component {
    constructor(props) {
        super(props)
        this.state = {
            bechdelRating: ''
        }
    }

    async componentDidMount() {
        const cleanId = this.props.currentMovie.imdb_id.slice(2)
        const data = await getBechdelTest(cleanId)
        this.setState({
            bechdelRating: data.rating
        })
    }
    
    render(props) {

        return(
            <div className="bechdel-test">
            <h3>Bechdel Test</h3>
            <p>{this.props.currentMovie.title} passes {this.state.bechdelRating && this.state.bechdelRating} out of 3 criteria.</p>
        </div>
        )
    }
}

export default BechdelTest