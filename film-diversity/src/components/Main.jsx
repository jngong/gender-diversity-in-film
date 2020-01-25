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
            searchTerm: '',
            selectedMovieId: ''
        }
    }

    handleClick = (id) => {
        this.setState({
            selectedMovieId: id
        })
    }

    async componentDidMount() {
        let data = await getMoviesNowPlaying();
        this.setState({
            movieList: data.results
        })
    }

    render() {
        return(
            <main>
                <Search />
                <Switch>
                    <Route 
                        exact path='/' component=
                            {props => <MovieList 
                                {...props} 
                                movieList={this.state.movieList} 
                                handleClick={this.handleClick} 
                            />}
                    />
                    <Route exact path = '/:film_id' component={props => <MovieDetails {...props}/>} />
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