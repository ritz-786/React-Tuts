import React, { Component } from 'react'

class RegComp extends Component {
    render() {
        console.log('Regular Component')
        return (
            <div>
                RegComponent {this.props.name}
            </div>
        )
    }
}

export default RegComp
