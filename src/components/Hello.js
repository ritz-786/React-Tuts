import React from 'react'

const Hello = () => {
    // return (
    //     <div className='Ruffle'>
    //         <h1>Hello Ramero</h1>
    //     </div>
    // );
    return React.createElement(
        'div',
        {id: 'hello' , className: 'robotica'},
        React.createElement(
            'h1',
            {id: 'Ramero'},
            'Hello Ramero'
        )
    )
}

export default Hello