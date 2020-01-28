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
        <div className="gender-summary">
            <div className="female-cast-summary">~ {castCalculation}% female cast</div>
            <div className="female-crew-summary">~ {crewCalculation}% female crew</div>
        </div>
    )
}

export default GenderSummary