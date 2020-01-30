import React from "react"

function CastMembers(props) {

    return (
        <div className="credits-list">
            <div className="credits-header">
                <span>Who's who in the cast?</span>
                <span className="icon" onClick={() => props.handleClick('cast')} >
                    <i className={props.castVisibility ? "far fa-minus-square" : "far fa-plus-square"}></i>
                </span>
            </div>
            <div className="credits-members" style={props.castVisibility ? { display: "flex" } : { display: "none" }}>
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
        </div>
    )
}

export default CastMembers