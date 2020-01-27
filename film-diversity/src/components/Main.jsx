import React, { Component } from "react";
import Search from "./Search";
import MovieList from "./MovieList";
import MovieDetails from "./MovieDetails";
import { getMoviesNowPlaying, getMoviesBySearch } from "../services/api-helper"
import { Route, Switch } from 'react-router-dom'

class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            movieList: [],
            searchList: [],
            searchTerm: '',
            listDisplay: 'now playing' /* This will toggle between two values: 'now playing' and 'search results'*/
        }
    }

    async componentDidMount() {
        let data = await getMoviesNowPlaying();
        this.setState({
            movieList: data.results
        })
    }

    /* Define a function to handle change on search input field and store in "searchTerm" */

    handleChange = (e) => {
        this.setState({
            searchTerm: e.target.value
        })
    }

    /* Define a function to handle submit on search button and use it to trigger API call and setState of searchList */

    render() {
        return(
            <main>
                <Search handleChange={this.handleChange} searchTerm={this.state.searchTerm} />
                <Switch>
                    <Route 
                        exact path='/' component=
                            {props => <MovieList 
                                {...props} 
                                movieList={this.state.movieList} 
                                handleClick={this.handleClick} 
                            />}
                    />
                    <Route exact path = '/:film_id' component={props => <MovieDetails {...props} />} />
                </Switch>
            </main>
        )
    }
}

export default Main

/* 
API call for search results:
        let searchResults = await getMoviesBySearch(this.state.searchTerm);
        console.log(searchResults.results)
*/