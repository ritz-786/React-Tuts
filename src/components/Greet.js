import React from 'react'

function Greet(){
    return <h1>Hello Ritik</h1>
}

export const Rest = (props) => {
    //destructuring props
    const {name , heroName}  =props
    console.log(props)
    return (
        <div>
            <h1>Hi {name} a.k.a {heroName}</h1>
            {props.children}
        </div>
        )
}

export default Greet