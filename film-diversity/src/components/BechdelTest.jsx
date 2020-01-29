import React, {Component} from "react"
import {getBechdelTest} from "../services/api-helper"

//* FYI, CORS plugin needs to be active for the Bechdel Test API results to render.

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
    
    displayRating() {
        switch(this.state.bechdelRating) {
            case 0:
                console.log('Bechdel Rating 0', this.state.bechdelRating);
                return (
                    <div className="bechdel-result-container">
                        <div className="emoji"><i className="far fa-frown"></i></div>
                        <ul>
                            <li><i className="fas fa-times-circle"></i>&nbsp;&nbsp;At least two women in cast...</li>
                            <li><i className="fas fa-times-circle"></i>&nbsp;&nbsp;Who speak to each other...</li>
                            <li><i className="fas fa-times-circle"></i>&nbsp;&nbsp;About something other than a man.</li>
                        </ul>
                    </div>
                );
            break;
            case 1:
                console.log('Bechdel Rating 1', this.state.bechdelRating);
                return (
                    <div className="bechdel-result-container">
                        <div className="emoji"><i className="far fa-meh"></i></div>
                        <ul>
                            <li><i className="fas fa-check-circle"></i>&nbsp;&nbsp;At least two women in cast...</li>
                            <li><i className="fas fa-times-circle"></i>&nbsp;&nbsp;Who speak to each other...</li>
                            <li><i className="fas fa-times-circle"></i>&nbsp;&nbsp;About something other than a man.</li>
                        </ul>
                    </div>
                );
            break;
            case 2: 
                console.log('Bechdel Rating 2', this.state.bechdelRating);
                return (
                    <div className="bechdel-result-container">
                        <div className="emoji"><i className="far fa-meh"></i></div>
                        <ul>
                            <li><i className="fas fa-check-circle"></i>&nbsp;&nbsp;At least two women in cast...</li>
                            <li><i className="fas fa-check-circle"></i>&nbsp;&nbsp;Who speak to each other...</li>
                            <li><i className="fas fa-times-circle"></i>&nbsp;&nbsp;About something other than a man.</li>
                        </ul>
                    </div>
                );
            break;
            case 3: 
                console.log('Bechdel Rating 3', this.state.bechdelRating);
                return (
                    <div className="bechdel-result-container">
                        <div className="emoji"><i className="far fa-grin-hearts"></i></div>
                        <ul>
                            <li><i className="fas fa-check-circle"></i>&nbsp;&nbsp;At least two women in cast...</li>
                            <li><i className="fas fa-check-circle"></i>&nbsp;&nbsp;Who speak to each other...</li>
                            <li><i className="fas fa-check-circle"></i>&nbsp;&nbsp;About something other than a man.</li>
                        </ul>
                    </div>
                );
            break;
            default:
                console.log('no rating', this.state.bechdelRating)
                return  null 
        }
    }

    render(props) {

        if (this.state.bechdelRating !== undefined) {
            return(
                <div className="bechdel-test">
                    <h3>Does this pass the Bechdel Test?</h3>
                    {this.displayRating()}
                </div>
            )
        } else {
            return null
        }
    }
}

export default BechdelTest