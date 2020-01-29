import React, {Component} from "react"
import {getBechdelTest} from "../services/api-helper"


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
                return (
                    <div className="bechdel-result-container">
                        <div className="emoji"><i className="fas fa-frown"></i></div>
                        <ul>
                            <li><i className="fas fa-times-circle"></i>&nbsp;&nbsp;At least two women in cast...</li>
                            <li><i className="fas fa-times-circle"></i>&nbsp;&nbsp;Who speak to each other...</li>
                            <li><i className="fas fa-times-circle"></i>&nbsp;&nbsp;About something other than a man.</li>
                        </ul>
                    </div>
                );

            case 1:
                return (
                    <div className="bechdel-result-container">
                        <div className="emoji"><i className="fas fa-meh"></i></div>
                        <ul>
                            <li><i className="fas fa-check-circle"></i>&nbsp;&nbsp;At least two women in cast...</li>
                            <li><i className="fas fa-times-circle"></i>&nbsp;&nbsp;Who speak to each other...</li>
                            <li><i className="fas fa-times-circle"></i>&nbsp;&nbsp;About something other than a man.</li>
                        </ul>
                    </div>
                );
            case 2: 
                return (
                    <div className="bechdel-result-container">
                        <div className="emoji"><i className="fas fa-meh"></i></div>
                        <ul>
                            <li><i className="fas fa-check-circle"></i>&nbsp;&nbsp;At least two women in cast...</li>
                            <li><i className="fas fa-check-circle"></i>&nbsp;&nbsp;Who speak to each other...</li>
                            <li><i className="fas fa-times-circle"></i>&nbsp;&nbsp;About something other than a man.</li>
                        </ul>
                    </div>
                );
            case 3: 
                return (
                    <div className="bechdel-result-container">
                        <div className="emoji"><i className="fas fa-grin-hearts"></i></div>
                        <ul>
                            <li><i className="fas fa-check-circle"></i>&nbsp;&nbsp;At least two women in cast...</li>
                            <li><i className="fas fa-check-circle"></i>&nbsp;&nbsp;Who speak to each other...</li>
                            <li><i className="fas fa-check-circle"></i>&nbsp;&nbsp;About something other than a man.</li>
                        </ul>
                    </div>
                );
            default:
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

/* 
//* FYI, CORS plugin needs to be active for the Bechdel Test API results to render.
//* In the Switch statement, originally had a 'break;' after each case but was getting a yellow warning about "unreachable code". Realized this was happening because I had a return in each case and the expression stops on a return.
*/