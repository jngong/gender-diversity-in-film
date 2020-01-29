import React from "react";

function Footer() {
    return(
        <footer>
            <hr></hr>
            <p>
                2020 &middot; Jennifer Gong &middot; 
                <a href="https://www.linkedin.com/in/jngong/" target="blank"><i className="fab fa-linkedin" style={{marginLeft: 5}}></i></a> 
                <a href="https://github.com/jngong" target="blank"><i className="fab fa-github-square" style={{marginLeft: 5}}></i></a>
            </p>
            <p>Data Sources: 
                <a href="https://www.themoviedb.org/" target="blank"> The Movie Database API </a> &middot;  
                <a href="https://bechdeltest.com/" target="blank"> Bechdel Test API </a> &middot; 
                <a href="https://seejane.org/research-informs-empowers/see-jane-2019/" target="blank"> See Jane 2019 Report</a>
            </p>
            <p>Built with <a href="https://reactjs.org/" target="blank">React JS</a></p>
        </footer>
    )
}

export default Footer