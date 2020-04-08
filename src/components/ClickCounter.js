import React, { Component } from 'react'
import withCounter from './withCounter'

class ClickCounter extends Component {

    render() {
        return (
            <div>
                <button onClick={this.props.incrementCount}>Mouse Clicked {this.props.count} times {this.props.name}</button>
            </div>
        )
    }
}

export default withCounter(ClickCounter)
