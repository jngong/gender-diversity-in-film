import React, { Component } from "react";
import Search from "./Search";
import MovieList from "./MovieList";
import MovieDetails from "./MovieDetails";
import { getMoviesNowPlaying, getMoviesBySearch } from "../services/api-helper"

class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            movieList: [],
            searchTerm: ''
        }
    }

    async componentDidMount() {
        let data = await getMoviesNowPlaying();
        this.setState({
            movieList: data.results
        })
    }

    render() {
        return(
            <div className="main">
                <h2>This is the Main Component</h2>
                <Search />
                <MovieList movieList={this.state.movieList} />
                {/* <MovieDetails /> */}
            </div>
        )
    }
}

export default Main

/* 
API call for search results:
        let searchResults = await getMoviesBySearch(this.state.searchTerm);
        console.log(searchResults.results)
*/