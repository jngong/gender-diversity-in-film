import React from "react"

function CastMembers(props) {

    return (
        <div className="credits-members">
            <div className="members females">
                <h2>Female Cast Members: {props.femaleCast.length}</h2>
                {props.mapCredits(props.femaleCast)}
            </div>
            <div className="members males">
                <h2>Male Cast Members: {props.maleCast.length}</h2>
                {props.mapCredits(props.maleCast)}
            </div>
            <div className="members gender-not-identified">
                <h2>Additional Cast Members: {props.unknownCast.length}</h2>
                <p style={{ fontStyle: 'italic' }}>These cast members are not identified as female or male in the database.</p>
                {props.mapCredits(props.unknownCast)}
            </div>
        </div>
    )
}

export default CastMembers