import React from 'react'
import {Link} from 'react-router-dom'

function Header() {
    return(
        <header>
            <h1 style={{width : '40%'}}>Gender Diversity in Film</h1>
            <Link exact="true" activeclassname="active" to="/"> 
                Home 
            </Link>
            <p style={{width : '75%'}}>
                When in comes to gender parity in popular entertainment, Hollywood still has a long way to go. An analysis of the 100 highest-grossing films of 2018 showed that female characters only accounted for 36.2% of speaking time and 39% of screen time. 
                <br/><br/>                
                This site allows you to get granular with your  exploration of gender representation in movies. Search or click on a film to get started.
            </p>
        </header>
    )
}

export default Header