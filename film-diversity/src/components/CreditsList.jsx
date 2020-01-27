import React from 'react'
import PersonImage from '../images/person-placeholder-185x278.png'

function CreditsList(props) {
    console.log('Cast List', props)

    const imgURL = 'https://image.tmdb.org/t/p/w185'

    if (props.femaleCast === null) {
        return <div>Loading..</div>
    }

   const femaleCast = props.femaleCast.map((person) => {
       return (
        <div className="cast-member">
            <img src={person.profile_path ? `${imgURL}${person.profile_path}` : `${PersonImage}`} alt={person.name}/>
            <p>{person.name}{person.character ? `, "${person.character}"` : ``}</p>
        </div>           
       )
   }) 

   const maleCast = props.maleCast.map((person) => {
        return (
        <div className="cast-member">
            <img src={person.profile_path ? `${imgURL}${person.profile_path}` : `${PersonImage}`} alt={person.name} />
            <p>{person.name}{person.character ? `, "${person.character}"` : ``}</p>
        </div>           
        )
    }) 
       
    return(

        <div className="credits-list">
            <div className="females">
                <h2>Female Cast Members</h2>
                {femaleCast}
            </div>
            <div className="males">
                <h2>Male Cast Members</h2>
                {maleCast}
            </div>
        </div>
    )

}

export default CreditsList

/* 
Image base URL for profile image: https://image.tmdb.org/t/p/w185
src={person.profile_path ? `${imgURL}${person.profile_path}` : `${PersonImage}`}
*/