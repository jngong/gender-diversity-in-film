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
            activeSearch: false,
            currentMovie: ''
        }
    }

    async componentDidMount() {
        let data = await getMoviesNowPlaying();
        this.setState({
            movieList: data.results
        })
    }

    //* Define a function to handle click on movie button to set the state of currentMovie which will be passed into the search bar for hiding on render of a movie details page.
    handleClick = (id) => {
        this.setState({
            currentMovie: id
        })
    }

    //* Define a function to handle change on search input field and store in "searchTerm"
    handleChange = (e) => {
        this.setState({
            searchTerm: e.target.value
        })
    }

    //* Define a function to handle submit on search form and use it to trigger API call and setState of searchList.
    //* Upon submit, this also sets the state for listDisplay to show the search results.
    handleSubmit = async (e) => {
        e.preventDefault();

        if (!this.state.searchTerm) {
            alert('Please enter a film title to search.')
            return
        }

        let data = await getMoviesBySearch(this.state.searchTerm)

        this.setState({
            searchList: data,
            activeSearch: true
        })
    }

    //* Define a function to clear the search results from Movie List page.
    clearSearchClick = (e) => {
        e.preventDefault();
        this.setState({
            searchTerm: '',
            searchList: [],
            activeSearch: false
        })
    }

    render() {
        return (
            <main>
                <Search
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    searchTerm={this.state.searchTerm}
                    clearSearch={this.clearSearchClick}
                    currentMovie={this.state.currentMovie}
                    activeSearch={this.state.activeSearch}
                />
                <Switch>
                    <Route
                        exact path='/' component=
                        {props => <MovieList
                            {...props}
                            movieList={this.state.movieList}
                            searchList={this.state.searchList}
                            activeSearch={this.state.activeSearch}
                            handleClick={this.handleClick}
                        />}
                    />
                    <Route exact path='/:film_id' component={props => <MovieDetails {...props} />} />
                </Switch>
            </main>
        )
    }
}

export default Main
