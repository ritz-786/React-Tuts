import React from 'react'
import Person from './Person'

function NameList() {
    const names = ['Bruce','Clark','Diana','Clark']
    // each child should have  a unique key
    const nameList = names.map((name,index) => <Person key={index} person={name}/>)
    return (
        <div>{nameList}</div>
    )
}

export default NameList