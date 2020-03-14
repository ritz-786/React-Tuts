import React, { Component } from 'react'

class ClassClick extends Component {

    clickHandler(){
        console.log(`Button Clicked Again`)
    }

    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>Click</button>
                <button onClick={() => this.clickHandler()}>Click ME</button>
            </div>
        )
    }
}

export default ClassClick
