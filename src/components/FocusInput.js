import React, { Component } from 'react'
import Input from './Input'

class FocusInput extends Component {

    constructor(props) {
        super(props)
    
        this.currentRef = React.createRef()
    }
    
    clickHandler = () =>{
        this.currentRef.current.getFocused();
    }

    render() {
        return (
            <div>
                <Input ref={this.currentRef}></Input>
                <button onClick={this.clickHandler}>Focus</button>
            </div>
        )
    }
}

export default FocusInput
