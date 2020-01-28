import React from 'react'
import {Link} from 'react-router-dom'

function Header() {
    return(
        <header>
            <h1>Gender Diversity in Film</h1>
            <Link exact="true" activeclassname="active" to="/"> 
                Home 
            </Link>
        </header>
    )
}

export default Header