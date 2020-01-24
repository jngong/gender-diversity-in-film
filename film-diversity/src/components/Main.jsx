import React, { Component } from "react";
import Search from "./Search";

class Main extends Component {
    constructor(props) {
        super(props)
        this.setState = {
            movieList: []
        }
    }

    render() {
        return(
            <div className="main">
                <h2>This is the Main Component</h2>
                <Search />
            </div>
        )
    }
}

export default Main