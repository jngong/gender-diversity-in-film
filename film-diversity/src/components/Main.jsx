import React, { Component } from "react";
import Search from "./Search";
import MovieList from "./MovieList";
import MovieDetails from "./MovieDetails";

class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            movieList: []
        }
    }

    render() {
        return(
            <div className="main">
                <h2>This is the Main Component</h2>
                <Search />
                <MovieList />
                <MovieDetails />
            </div>
        )
    }
}

export default Main