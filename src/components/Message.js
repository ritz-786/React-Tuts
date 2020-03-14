import React,{Component} from 'react'

class Message extends React.Component{

    constructor(){
        // calling base class constructor 
        super();
        this.state = {
            message: 'Welcome Visitor'
        }
    }

    changeMessage(){
        this.setState({
            message: 'Thank you for Subscribing'
        })
    }

    render(){
        return(
            <div>
            <h1>{this.state.message}</h1>
            <button onClick={() => this.changeMessage()}>subscribe</button>
            </div>
        )    
    }
}

export default Message;