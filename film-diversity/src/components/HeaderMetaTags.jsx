import React from 'react'
import MetaTags from 'react-meta-tags'
import SiteImage from '../images/site-image-gender-diversity-film.png'

function HeaderMetaTags() {
    return(
        <MetaTags>
            <title>Gender Diversity in Film</title>
            <meta name="description" content="Explore the representation of females in the film industry, created with React." />
            <meta property="og:title" content="Gender Diversity in Film"/>
            <meta property="og:description" content="Explore the representation of females in the film industry."/>
            <meta property="og:image" content={SiteImage}/>
            <meta property="og:url" content="https://gender-diversity-in-film.surge.sh/"/>
            <meta name="twitter:card" content="Gender Diversity in Film"/>
        </MetaTags>

    )
}

export default HeaderMetaTags