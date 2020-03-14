import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            message: 'Hello'
        }

        // method shown in documentation
        // this.clickHandler = this.clickHandler.bind(this)
    }

    // we have to bind this to the function
    // 1) bind in the render method
    // clickHandler()  {
    //     this.setState({
    //         message: 'GoodBye'
    //     })
    //     console.log(this)
    // }  

    // 4) change the declaration of the method
    clickHandler = () =>{
        this.setState({
            message: 'GoodBye'
        })
        console.log(this)
    }

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* this method is laggy at large level */}
                {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
                
                {/* this method seems easy when we have to pass parameters to the function */}
                {/* <button onClick={() => this.clickHandler()}>Click</button> */}

                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default EventBind
