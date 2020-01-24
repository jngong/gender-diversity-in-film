import axios from "axios"
import dotenv from "dotenv"
dotenv.config()

const api_key = process.env.REACT_APP_TMDB_API_KEY

const TMDB_base = 'https://api.themoviedb.org/3/'
const Bechdel_base = "http://bechdeltest.com/api/v1/getMovieByImdbId?imdbid="


export const getMoviesNowPlaying = async () => {
    const response = await axios.get(`${TMDB_base}movie/now_playing?language=en-US&page=1&region=US&api_key=${api_key}`)
    return response.data
}

export const getMoviesBySearch = async (query) => {
    const response = await axios.get(`${TMDB_base}search/movie?language=en-US&page=1&include_adult=false&api_key=${api_key}&query=${query}`)
    return response.data
}

export const getMovieDetails = async (id) => {
    const response = await axios.get(`${TMDB_base}movie/${id}?append_to_response=credits&language=en-US&api_key=${api_key}`)
    return response.data
}

export const getBechdelTest = async (imdb_id) => {
    const response = await axios.get(`${Bechdel_base}${imdbid}`)
}
