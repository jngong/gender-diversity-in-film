# Gender Diversity in Film

Deployed application: https://gender-diversity-in-film.surge.sh/

This app will allow users to explore gender representation and equality in the film industry. Visitors will search for a film (or click on one available) to view gender stats for the cast and crew (i.e. % female vs. % male), the cast and crew members split by gender, and possibly, whether or not that film passes the 3 criteria of the Bechdel Test (Are there 2 named women in the cast? Do they talk to each other? And about something other than a man?).

This project leverages data from [The Movie Database API](https://www.themoviedb.org/documentation/api) and the [Bechdel Test API](https://bechdeltest.com/api/v1/doc)

## Code Showcase

I used `withRouter()` from React Router Dom to conditionally display my search component via Route. Completely new to me and a result of an effective Google search along with some trial and error to get it working.

```
import { withRouter } from "react-router-dom"

function Search(props) {
    if (props.location.pathname.match(`/${props.currentMovie}`) && props.match.isExact === false) {
        return null;
    }    
    return(
        <div>
            <div className="description">
                <p>...text...</p>
            </div>
            <div className="search-bar">
                <form onSubmit={props.handleSubmit}>
                    <input 
                        type="text" 
                        placeholder="Search by film title..."
                        autoComplete="off"
                        name="searchFilm"
                        value={props.searchTerm}
                        onChange={props.handleChange}
                    />    
                    <button>Get Results</button>
                </form>
                {props.activeSearch ? <button onClick={props.clearSearch}>Clear Search</button> : null}
            </div>
        </div>
    )
}

export default withRouter(Search)
```

## MVP Overview

- Pulls data from 2 APIs and render information from each based on imdb_id match
- Allows user to search for a movie by title and show results that match 
- Shows a default Home page with an index of movies (i.e. trending) that visitors can click on to browse as an alternative to searching.
- When user clicks on a movie, routes to a page with: 
	- Movie details sub-header: e.g. Title, year, budget, revenue
	- Summary of gender breakdown:  
		- % F vs. M: Cast and Crew
		- Does it pass Bechdel’s 3 requirements (if available)? Y/N
	- Visual breakdown of the cast members by gender

## React Component Hierarchy
![Component Hierarchy](https://res.cloudinary.com/db0kbxvhr/image/upload/c_scale,w_800/v1579876754/Project%202%20-%20Gender%20Diversity%20in%20Film/Component-Hierarchy-Project2-Jan24-2020_kzbdgd.png)

## Wireframes
![Wireframe](https://res.cloudinary.com/db0kbxvhr/image/upload/c_scale,w_800/v1579876754/Project%202%20-%20Gender%20Diversity%20in%20Film/Wireframe-Project2-Jan24-2020_dczxwk.png)

##  Libraries Used
- Axios - To fetch data from APIs
- React Router - To create navigation via URL parameters rendering different information based on inputs
- Dotenv - To hide API keys and ensure not uploaded to Github

## Issues and Resolutions

- Issue 1: How to hide the Search component based on route: As I progressed, I realized that it was confusing to keep the search bar visible when the user landed on a details page. However, because my Search component wasn't explicitly nested under my Movie List component, I had trouble figuring out how to hide it on the Movie Details component. I did some Google research and discovered the `withRouter()` method available with React Router Dom. After some trial and error with the match syntax, I was able to get this to work.

- Issue 2: My movie details component requires me to filter through the credits twice based on gender (once for cast and once for crew), then each is mapped 3 times for displaying the credits separated by gender group. I had trouble getting this logic to be DRY and so just copied and pasted the code for it to work. Once I was done with MVP and requirements, I created a feature branch to troubleshoot. I created a new function that takes an array as a parameter, then tested it with 1 section before changing all 6. It still wasn't working so I console logged the list to make sure the function was being called and passing the argument properly. All looked good, so it was an issue with my return statement. I realized that although I was returning the divs in the mapping, I wasn't returning the mapping to the function and so when I added a return statement outside of the map, all was rendering as expected. From there, I applied the changes to the rest of the sections and was able to delete many lines of repetitive code.

## Change Log
- 1/25 - Removed handleClick method and selectedMovieId state from Main because I decided to get the movie details on MovieDetails component from the URL parameter id rather than a passed state. This way, it will render details when you directly visit the page.
- 1/27 - Added a new state for "activeSearch" to main to keep track of search status. When true, MovieList displays search results instead of now playing list; opposite when false. Added a "clear search" button in the Search component to reset the state of the MovieList to its default - showing "Now Playing" movies.
- 1/27 - Converted the Bechdel Test component from functional to class to accommodate the API call for rating data and declare a state for the imdb id.

## Post-MVP Goals
- Convert class components to functional components with hooks to get practice in both
- Add routes to profile pages for each actor clickable from each Movie page
- Add recent articles from the News API that mentions that movie to encourage more browsing
- Integrate 3rd party industry benchmarks as comparison for each movie
- Include a route that would provide aggregated data, for example, by genre, release year or director, the # movies that pass the Bechel test or # movies that have a cast and production crew that are at least 50% female