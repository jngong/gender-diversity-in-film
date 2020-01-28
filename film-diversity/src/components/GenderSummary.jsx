import React from "react"

function GenderSummary(props) {

//* Conditional statement in case states are undefined when passed down
    if (props.femaleCast === null && props.femaleCrew === null) {
        return <div></div>
    }

//* Define a function to calculate the percentage of females in the cast (where gender is known)        
    let femaleCast = props.femaleCast.length
    let maleCast = props.maleCast.length
    let castCalculation = ((femaleCast/(femaleCast + maleCast)) * 100).toFixed(0)

    let femaleCrew = props.femaleCrew.length
    let maleCrew = props.maleCrew.length
    let crewCalculation = ((femaleCrew/(femaleCrew + maleCrew)) * 100).toFixed(0)

    return(
        <div className="gender-summary-container">
            <div className="female-cast-summary">
                <div className="label">Female Cast: </div>
                <div className="full-bar">
                    <div className="percentage-fill" style={{width : `${castCalculation}%`}}></div>
                    <div>{castCalculation}% </div>
                </div>
            </div>
            <div className="female-crew-summary">
                <div className="label">Female Crew: </div>
                <div className="full-bar">
                    <div className="percentage-fill" style={{width : `${crewCalculation}%`}}></div>
                    <div>{crewCalculation}% </div>
                </div>
            </div>
            <cite>Note: % figures do not account for cast or crew members whose genders are not declared.</cite>
        </div>
    )
}

export default GenderSummary