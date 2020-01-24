# Project Overview


## Gender Diversity in Film

**Project description:** This app will allow users to explore gender representation and equality in the film industry. Visitors will search for a film (or click on one available) to view gender stats for the cast and crew (i.e. % female vs. % male), the cast and crew members split by gender, and possibly, whether or not that film passes the 3 criteria of the Bechdel Test (Are there 2 named women in the cast? Do they talk to each other? And about something other than a man?).

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
| BechdelTest | The BechdelTest receives props for the IMDB id that will set an API call to Bechdel API and render result | Functional |
| CastList | The CastList receives props from the currentMovie state to map through the list of characters and render in two different divs | Functional |

## Priority Matrix

![Priority Matrix](https://res.cloudinary.com/db0kbxvhr/image/upload/c_scale,w_600/v1579876753/Priority-Matrix-Project2-Jan24-2020_afywjs.png)

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Create Boilerplate for components | H | 1hr| tbd | tbd |
| Set up API call functions | H | 3hrs| tbd | tbd |
| Set up Routes for MovieList and MovieDetails in App | H | 1hr | tbd | tbd |
| Set up Main component with event functions and state | H | 1.5hr | tbd | tbd |
| Create form on Search and enable event methods  | H | 1.5hr | tbd | tbd |
| Set up MovieList map and enable MovieButton links | H | 3hrs | tbd | tbd |
| Set up MovieDetails and ensure router works  | H | 2hrs| tbd | tbd |
| Create logic for GenderCalc of cast and crew and display result | H | 3hrs| tbd | tbd |
| Bechdel Test data API call and display result  | L | 2hrs| tbd | tbd |
| Set up CastList component to map through array, splitting female on one side and male on the other | M | 3hrs| tbd | tbd |
| CSS styling - desktop  | M | 4hrs| tbd | tbd |
| CSS styling - mobile | M | 1hr| tbd | tbd |
| Total | H | 26hrs| tbd | tbd |

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|Jan 24th| Project Pitch and Approval, Create React App, Components and API calls | In Progress
|Jan 27th| Build out Main, Search and MovieList for setting state | Incomplete
|Jan 28th| Build out MovieDetails and logic for GenderCalc and BechdelTest | Incomplete
|Jan 29th| CSS Styling  | Incomplete
|Jan 30th| MVP | Incomplete
|Jan 31st| Presentation | Incomplete

## Additional Libraries
- Axios - To fetch data from APIs
- React Router - To create navigation via URL parameters rendering different information based on inputs
- Dotenv - To hide API keys and ensure not uploaded to Github

## Issues and Resolutions

I can foresee potential issues with fetching query data from the TMDB API as there is a lot that can come back with each call and traversing through could get complicated. Also, I plan on using 2 or 3 separate endpoints to call data from the API and match through the id. My resolution will be to be as descriptive and distinctive as I can be with naming for my states and functions so as not to confuse the purpose of each.

Another issue I foresee is with my movieList component. I plan on doing an initial fetch of data based on a pre-set list of “top movies” for the homepage and use conditional rendering when a search result is done. This might force me to create a separate component for that purpose so as not to confuse my API calls. 

Within MovieDetails, I think I will need to add more components for the different sections of that page, but was running into way too many components so will assess when I get to that step.

## Code Snippet

TBD
Use this section to include a brief code snippet you are proud of, along with a brief description of why.

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log
TBD
 Use this section to document what changes were made in your overall planning and the reasoning behind those changes. 
