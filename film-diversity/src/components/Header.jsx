import React from 'react'
import { Link, withRouter } from 'react-router-dom'

function Header(props) {

    if (props.location.pathname.match(`/`) && props.match.isExact === true) {
        return (
            <header>
                <h1>Gender Diversity in Film</h1>
            </header>
        )
    }

    return (
        <header>
            <h1>Gender Diversity in Film</h1>
            <Link exact="true" activeclassname="active" to="/">
                <i className="fas fa-arrow-left"></i> Back
            </Link>
        </header>
    )
}

export default withRouter(Header)