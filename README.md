# Project Overview
![Winter Themed GIF](https://media.giphy.com/media/xUySTQ6Ed5CVlxNgQ0/giphy.gif)

## Gender Diversity in Film

This app will allow users to explore gender representation and equality in the film industry. Visitors will search for a film (or click on one available) to view gender stats for the cast and crew (i.e. % female vs. % male), the cast and crew members split by gender, and possibly, whether or not that film passes the 3 criteria of the Bechdel Test (Are there 2 named women in the cast? Do they talk to each other? And about something other than a man?).

## API Snippet
https://www.themoviedb.org/documentation/api

```
{
    "adult": false,
    "backdrop_path": "/nwoDC0IJA47wr3znJgT1kkk64Gy.jpg",
    "belongs_to_collection": null,
    "budget": 8600000,
    "genres": [
        {
            "id": 18,
            "name": "Drama"
        }
    ],
    "homepage": "https://www.marriagestorymovie.com/",
    "id": 492188,
    "imdb_id": "tt7653254",
    "original_language": "en",
    "original_title": "Marriage Story",
    "overview": "A stage director and an actress struggle through a grueling, coast-to-coast divorce that pushes them to their personal extremes.",
    "popularity": 53.889,
    "poster_path": "/pZekG6xabTmZxjmYw10wN84Hp8d.jpg",
    "production_companies": [
        {
            "id": 437,
            "logo_path": "/nu20mtwbEIhUNnQ5NXVhHsNknZj.png",
            "name": "Heyday Films",
            "origin_country": "GB"
        }
    ],
    "production_countries": [
        {
            "iso_3166_1": "GB",
            "name": "United Kingdom"
        }
    ],
    "release_date": "2019-11-06",
    "revenue": 0,
    "runtime": 137,
    "spoken_languages": [
        {
            "iso_639_1": "en",
            "name": "English"
        }
    ],
    "status": "Released",
    "tagline": "Where there's a love, there's a way.",
    "title": "Marriage Story",
    "video": false,
    "vote_average": 8.0,
    "vote_count": 1962,
    "credits": {
        "cast": [
            {
                "cast_id": 2,
                "character": "Nicole Barber",
                "credit_id": "5a2ef1be0e0a264cc817521a",
                "gender": 1,
                "id": 1245,
                "name": "Scarlett Johansson",
                "order": 0,
                "profile_path": "/tHMgW7Pg0Fg6HmB8Kh8Ixk6yxZw.jpg"
            },

```
https://bechdeltest.com/api/v1/doc

```
{
    "date": "2019-11-11 16:17:41",
    "id": 8893,
    "imdbid": "7653254",
    "title": "Marriage Story",
    "submitterid": 17433,
    "rating": 2,
    "year": 2019,
    "dubious": "0",
    "visible": "1"
}

```

## Wireframes
https://whimsical.com/GYUEz66Tc3rVFSrETznNUJ

### MVP

- Pull data from 2 APIs and render information from each based on imdb_id match
- Allow user to search for a movie by title and show results that match 
- Show a default Home page with an index of movies (i.e. trending) that visitors can click on to browse as an alternative to searching.
- When user clicks on a movie, route to a page with: 
	- Movie details sub-header: e.g. Title, year, budget, revenue
	- Summary of gender breakdown:  
		- % F vs. M: Cast and Crew
		- Does it pass Bechdel’s 3 requirements (if available)? Y/N
	- Visual breakdown of the cast members by gender

#### PostMVP:
- Convert class components to functional components with hooks to get practice in both
- Add routes to profile pages for each actor clickable from each Movie page
- Add recent articles from the News API that mentions that movie to encourage more browsing
- Integrate 3rd party industry benchmarks as comparison for each movie
- Include a route that would provide aggregated data, for example, by genre, release year or director, the # movies that pass the Bechel test or # movies that have a cast and production crew that are at least 50% female

## React Component Hierarchy

![Component Hierarchy](https://res.cloudinary.com/db0kbxvhr/image/upload/c_scale,w_700/v1579876754/Component-Hierarchy-Project2-Jan24-2020_kzbdgd.png)

## Components

| Component | Description |Type |
| --- | --- | --- |
| App | The top-most layer in the app will set routes and pass route props to child components| Functional |
| Header | The Header receives props that will render nav link(s), display title | Functional |
| Footer | The Footer will display source attributions | Functional |
| Main | The Main houses multiple rendered views through React Router, controls data received from API calls and defines methods to be passed down to capture user inputs that will set various states | Class |
| Search | The Search receives props that will enable it to set state for searchTerm and movieList based on user input | Functional |
| MovieList | The MovieList receives props from movieList state / TMDB API call and map through data to render MovieButton components | Functional |
| MovieButton | The MovieButton will display an image and name for each movie object mapped from MovieList and set state for currentMovie on click | Functional |
| MovieDetails | The MovieDetails receives selectedMovieId as props in order to fetch the currentMovie object from the API and set it in state. Will also define a method to calculate gender percentage that will be passed to child components. Will also render basic movie information like name, year and revenue| Class |
| GenderCalc | The GenderCalc receives props about the cast and crew to calculate the ratio of women to men and render results | Functional |
| BechdelTest | The BechdelTest receives props for the IMDB id that will set an API call to Bechdel API and render result | Class |
| CastList | The CastList receives props from the currentMovie state to map through the list of characters and render in two different divs | Functional |

## Priority Matrix

![Priority Matrix](https://res.cloudinary.com/db0kbxvhr/image/upload/c_scale,w_600/v1579876753/Priority-Matrix-Project2-Jan24-2020_afywjs.png)

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Create Boilerplate for components | H | 2hrs| 1hr | 1hr |
| Set up API call functions | H | 2hrs| 3hrs | 3hrs |
| Set up Routes for MovieList and MovieDetails in App | H | 2hrs | 2hrs | 2hrs |
| Set up Main component with event functions and state | H | 2hrs | 1hr | 1hr |
| Create form on Search and enable event methods  | H | 2hrs | 3hrs | 3hrs |
| Set up MovieList map and enable MovieButton links | H | 4hrs | 3hrs | 3hrs |
| Set up MovieDetails and ensure router works  | H | 3hrs| 1hr | 1hr |
| Create logic for GenderCalc of cast and crew and display result | H | 4hrs| 4hrs | 4hrs |
| Bechdel Test data API call and display result  | L | 3hrs| 3hrs | 3hrs |
| Set up CastList component to map through array, splitting female on one side and male on the other | M | 3hrs| 3hrs | 3hrs |
| CSS styling - desktop  | M | 4hrs| 6hrs | 6hrs |
| CSS styling - mobile | M | 2hrs| 3hrs | 3hrs |
| Refactor Code | L | 4hrs| 2hrs | 2hrs |
| Total | H | 33hrs| 35hrs | 35hrs |

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|Jan 24th| Project Pitch and Approval, Create React App, Components and API calls | Completed
|Jan 27th| Build out Main, Search and MovieList for setting state | Completed
|Jan 28th| Build out MovieDetails and logic for GenderCalc and BechdelTest | Completed
|Jan 29th| MVP  | Completed
|Jan 30th| CSS Styling | Completed
|Jan 31st| Presentation | Incomplete

## Additional Libraries
- Axios - To fetch data from APIs
- React Router - To create navigation via URL parameters rendering different information based on inputs
- Dotenv - To hide API keys and ensure not uploaded to Github

## Issues and Resolutions

- Issue 1: How to hide the Search component based on route: As I progressed, I realized that it was confusing to keep the search bar visible when the user landed on a details page. However, because my Search component wasn't explicitly nested under my Movie List component, I had trouble figuring out how to hide it on the Movie Details component. I did some Google research and discovered the "withRouter" method within react router dom. After some trial and error with the match syntax, I was able to get this to work.

- Issue 2: My movie details component requires me to filter through the credits twice based on gender (once for cast and once for crew), then each is mapped 3 times for displaying the credits separated by gender group. I had trouble getting this logic to be DRY and so just copied and pasted the code for it to work. Once I was done with MVP and requirements, I created a feature branch to troubleshoot. I created a new function that takes an array as a parameter, then tested it with 1 section before changing all 6. It still wasn't working so I console logged the list to make sure the function was being called and passing the argument properly. All looked good, so it was an issue with my return statement. I realized that although I was returning the divs in the mapping, I wasn't returning the mapping to the function and so when I added a return statement outside of the map, all was rendering as expected. From there, I applied the changes to the rest of the sections and was able to delete many lines of repetitive code.

## Code Snippet

I used "withRouter" from React Router Dom to conditionally display my search component via Route. Completely new to me and a result of an effective Google search along with some trial and error to get it working.

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

## Change Log
- 1/25 - Removed handleClick method and selectedMovieId state from Main because I decided to get the movie details on MovieDetails component from the URL parameter id rather than a passed state. This way, it will render details when you directly visit the page.
- 1/27 - Added a new state for "activeSearch" to main to keep track of search status. When true, MovieList displays search results instead of now playing list; opposite when false. Added a "clear search" button in the Search component to reset the state of the MovieList to its default - showing "Now Playing" movies.
- 1/27 - Converted the Bechdel Test component from functional to class to accommodate the API call for rating data and declare a state for the imdb id.