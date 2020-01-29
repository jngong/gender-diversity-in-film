import React from 'react'
import PersonImage from '../images/person-placeholder-185x278.png'

function CreditsList(props) {

    const imgURL = 'https://image.tmdb.org/t/p/w185'

    if (props.femaleCast === null) {
        return <div>Loading..</div>
    }

//* Mapping through the array of female cast members passed down as props from MovieDetails component.
   const femaleCast = props.femaleCast.map((person, i) => {
       return (
        <div className="cast-member" key={i}>
            <img src={person.profile_path ? `${imgURL}${person.profile_path}` : `${PersonImage}`} alt={person.name}/>
            <p>{person.name}{person.character ? `, "${person.character}"` : ``}</p>
        </div>           
       )
   }) 

//* Mapping through the array of male cast members passed down as props from MovieDetails component. 
// TODO: This is not DRY code. Will need to refactor later.
   const maleCast = props.maleCast.map((person, i) => {
        return (
        <div className="cast-member" key={i}>
            <img src={person.profile_path ? `${imgURL}${person.profile_path}` : `${PersonImage}`} alt={person.name} />
            <p>{person.name}{person.character ? `, "${person.character}"` : ``}</p>
        </div>           
        )
    }) 

//* Mapping through the array of cast members who don't have an identified gender passed down as props from MovieDetails component. 
// TODO: This is not DRY code. Will need to refactor later.
const unknownCast = props.unknownCast.map((person, i) => {
    return (
    <div className="cast-member" key={i}>
        <img src={person.profile_path ? `${imgURL}${person.profile_path}` : `${PersonImage}`} alt={person.name} />
        <p>{person.name}{person.character ? `, "${person.character}"` : ``}</p>
    </div>           
    )
}) 

//* Mapping through the array of crew members who don't have an identified gender passed down as props from MovieDetails component. 
// TODO: This is not DRY code. Will need to refactor later.
const unknownCrew = props.unknownCrew.map((person, i) => {
    return (
    <div className="cast-member" key={i}>
        <img src={person.profile_path ? `${imgURL}${person.profile_path}` : `${PersonImage}`} alt={person.name} />
        <p>{person.name}{person.job ? `, ${person.job}` : ``}</p>
    </div>           
    )
}) 

//* Mapping through the array of female crew  members passed down as props from MovieDetails component. 
// TODO: This is not DRY code. Will need to refactor later.
    const femaleCrew = props.femaleCrew.map((person, i) => {
        return (
        <div className="cast-member" key={i}>
            <img src={person.profile_path ? `${imgURL}${person.profile_path}` : `${PersonImage}`} alt={person.name} />
            <p>{person.name}{person.job ? `, ${person.job}` : ``}</p>
        </div>           
        )
    })

//* Mapping through the array of male crew  members passed down as props from MovieDetails component. 
// TODO: This is not DRY code. Will need to refactor later.
    const maleCrew = props.maleCrew.map((person, i) => {
        return (
        <div className="cast-member" key={i}>
            <img src={person.profile_path ? `${imgURL}${person.profile_path}` : `${PersonImage}`} alt={person.name} />
            <p>{person.name}{person.job ? `, ${person.job}` : ``}</p>
        </div>           
        )
    }) 
      
    return(
        <div>
            <div className="credits-list cast">
                <h3>Who's who in the cast?</h3>
                <div className="members females">
                    <h2>Female Cast Members: {props.femaleCast.length}</h2>
                    {femaleCast}
                </div>
                <div className="members males">
                    <h2>Male Cast Members: {props.maleCast.length}</h2>
                    {maleCast}
                </div>
                <div className="members gender-not-identified">
                    <h2>Additional Cast Members: {props.unknownCast.length}</h2>
                    <p style={{fontStyle: 'italic'}}>These cast members are not identified as female or male in the database.</p>
                    {unknownCast}
                </div>
            </div>

            <div className="credits-list crew">
                <h3>Who's who in the crew?</h3>
                <div className="members females">
                    <h2>Female Crew Members: {props.femaleCrew.length}</h2>
                    {femaleCrew}
                </div>
                <div className="members males">
                    <h2>Male Crew Members: {props.maleCrew.length}</h2>
                    {maleCrew}
                </div>
                <div className="members gender-not-identified">
                    <h2>Additional Crew Members: {props.unknownCrew.length}</h2>
                    <p>These crew members are not identified as female or male in the database</p>
                    {unknownCrew}
                </div>
            </div>

        </div>        
    )

}

export default CreditsList

/* 
    TODO: Note that each mapping of credits members by gender is not DRY and will want to refactor it later.
*/