import React from 'react'
import {Link} from 'react-router-dom'

function Header() {
    return(
        <header>
            <Link exact="true" activeclassname="active" to="/"> 
                Home 
            </Link>
            <h1>Gender Diversity in Film</h1>
        </header>
    )
}

export default Header