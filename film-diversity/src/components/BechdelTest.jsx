import React, { Component } from "react"
import { getBechdelTest } from "../services/api-helper"


class BechdelTest extends Component {
    constructor(props) {
        super(props)
        this.state = {
            bechdelRating: undefined,
            bechdelValues: []
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
        this.setValues()
    }

    setValues() {
        switch (this.state.bechdelRating) {
            case 0:
                this.setState({
                    bechdelValues: ['fas fa-frown', false, false, false]
                });
                break;
            case 1:
                this.setState({
                    bechdelValues: ['fas fa-meh', true, false, false]
                });
                break;
            case 2:
                this.setState({
                    bechdelValues: ['fas fa-meh', true, true, false]
                });
                break;
            case 3:
                this.setState({
                    bechdelValues: ['fas fa-grin-hearts', true, true, true]
                })
                break;
            default:
                return null
        }
    }

    render() {
        if (this.state.bechdelRating !== undefined) {
            return (
                <div className="bechdel-test">
                    <h3>Does this pass the Bechdel Test?</h3>
                    <div className="bechdel-result-container">
                        <div className="emoji">
                            <i className={this.state.bechdelValues[0]}></i>
                        </div>
                        <ul>
                            <li><i className={`${this.state.bechdelValues[1] ? 'fas fa-check-circle' : 'fas fa-times-circle'}`}></i>&nbsp;&nbsp;At least two women in cast...</li>
                            <li><i className={`${this.state.bechdelValues[2] ? 'fas fa-check-circle' : 'fas fa-times-circle'}`}></i>&nbsp;&nbsp;Who speak to each other...</li>
                            <li><i className={`${this.state.bechdelValues[3] ? 'fas fa-check-circle' : 'fas fa-times-circle'}`}></i>&nbsp;&nbsp;About something other than a man.</li>
                        </ul>
                    </div>
                </div>
            )
        } else {
            return null
        }
    }
}

export default BechdelTest

/*
    //* FYI, CORS plugin needs to be active for the Bechdel Test API results to render.
*/