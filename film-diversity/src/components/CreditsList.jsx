import React, { useState } from 'react'
import PersonImage from '../images/person-placeholder-185x278.png'
import CastMembers from './CastMembers'
import CrewMembers from './CrewMembers'

function CreditsList(props) {

    const imgURL = 'https://image.tmdb.org/t/p/w185'

    const [castVisibility, setCastVisibility] = useState(true)
    const [crewVisibility, setCrewVisibility] = useState(true)

    const handleClick = (listType) => {
        if (listType === 'cast') {
            setCastVisibility(!castVisibility)
        } else if (listType === 'crew') {
            setCrewVisibility(!crewVisibility)
        }
    }

    if (props.femaleCast === null) {
        return <div>Loading...</div>
    }

    const mapCredits = (list) => {
        const display = list.map((person, i) => {
            return (
                <div className="cast-member" key={i}>
                    <img
                        src={person.profile_path ? `${imgURL}${person.profile_path}` : `${PersonImage}`} alt={person.name}
                    />
                    <p>
                        {person.name}
                        {person.cast_id ? `${person.character ? `, "${person.character}"` : ''}` : `${person.job ? `, ${person.job}` : ''}`}
                    </p>
                </div>
            )
        })
        return display
    }
    return (
        <div>
            <div className="credits-list cast">
                <div className="credits-header">
                    <span>Who's who in the cast?</span>
                    <span className="icon" onClick={() => handleClick('cast')} >
                        <i className={castVisibility ? "far fa-minus-square" : "far fa-plus-square"}></i>
                    </span>
                </div>
                <CastMembers 
                    femaleCast={props.femaleCast} 
                    maleCast={props.maleCast} 
                    unknownCast={props.unknownCast} 
                    mapCredits={mapCredits}
                    castVisibility={castVisibility}
                />
            </div>
            <div className="credits-list">
                <div className="credits-header">
                    <span>Who's who in the crew?</span>
                    <span  className="icon" onClick={() => handleClick('crew')}>
                        <i className={crewVisibility ? "far fa-minus-square" : "far fa-plus-square"}></i>
                    </span>
                </div>
                <CrewMembers 
                    femaleCrew={props.femaleCrew}
                    maleCrew={props.maleCrew}
                    unknownCrew={props.unknownCrew}
                    mapCredits={mapCredits}
                    crewVisibility={crewVisibility}
                />
            </div>
        </div>
    )
}

export default CreditsList