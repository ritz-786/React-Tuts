import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            parent: 'Mother'
        }

        this.greetParent = this.greetParent.bind(this);
    }
    
    greetParent(child){
        alert(`Hello ${this.state.parent} from ${child}`)
    }

    render() {
        return (
            <div>
                <ChildComponent greetHandler={this.greetParent}></ChildComponent>
            </div>
        )
    }
}

export default ParentComponent
