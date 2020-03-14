import React from 'react'

function Columns() {
    return (
        // inorder to remove the extra div element , we should use React.Fragment
        //short hand compilation for <React.Fragment></React.Fragment> is <></>
        <React.Fragment>
            <td>Name</td>
            <td>Lakshman</td>
        </React.Fragment>
    )
}

export default Columns
