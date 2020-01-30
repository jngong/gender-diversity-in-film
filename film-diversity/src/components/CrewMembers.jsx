import React from "react"

function CrewMembers(props) {

    return (
        <div className="credits-members">
            <div className="members females">
                <h2>Female Crew Members: {props.femaleCrew.length}</h2>
                {props.mapCredits(props.femaleCrew)}
            </div>
            <div className="members males">
                <h2>Male Crew Members: {props.maleCrew.length}</h2>
                {props.mapCredits(props.maleCrew)}
            </div>
            <div className="members gender-not-identified">
                <h2>Additional Crew Members: {props.unknownCrew.length}</h2>
                <p>These crew members are not identified as female or male in the database.</p>
                {props.mapCredits(props.unknownCrew)}
            </div>
        </div>
    )
}

export default CrewMembers