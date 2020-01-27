import React from "react"

function GenderSummary(props) {

    if (props.femaleCast === null) {
        return <div></div>
    }

//* Define a function to calculate the percentage of females in the cast (where gender is known)        
    let femaleCast = props.femaleCast.length
    let maleCast = props.maleCast.length
    let castCalculation = (femaleCast/(femaleCast + maleCast)).toFixed(2) * 100

    if (props.femaleCrew === null) {
        return <div></div>
    }

    let femaleCrew = props.femaleCrew.length
    let maleCrew = props.maleCrew.length
    let crewCalculation = (femaleCrew/(femaleCrew + maleCrew)).toFixed(2) * 100

    return(
        <div className="gender-summary">
            <div className="female-cast-summary">~ {castCalculation}% female cast</div>
            <div className="female-crew-summary">~ {crewCalculation}% female crew</div>
        </div>
    )
}

export default GenderSummary