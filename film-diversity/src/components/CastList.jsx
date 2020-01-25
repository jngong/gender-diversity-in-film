import React from 'react'

function CastList(props) {
    console.log('Cast List', props)

    const imgURL = 'https://image.tmdb.org/t/p/w185'

    if (props.femaleCast === null) {
        return <div>Loading..</div>
    }

   const femaleCast = props.femaleCast.map((person) => {
       return (
        <div>
            <img src={`${imgURL}${person.profile_path}`} alt={person.name} />
            <p>{person.name}, "{person.character}"</p>
        </div>           
       )
   }) 

   const maleCast = props.maleCast.map((person) => {
        return (
        <div>
            <img src={`${imgURL}${person.profile_path}`} alt={person.name} />
            <p>{person.name}, "{person.character}"</p>
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

export default CastList

/* 
Image base URL for profile image: https://image.tmdb.org/t/p/w185
*/