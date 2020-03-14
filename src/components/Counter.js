import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }
    
    increment(){
        // setState method works asynchronously
        // this.setState({
        //     count: this.state.count + 1
        // },()=> console.log(this.state.count))

        //to change values based on previous state ,
        // pass previous state as a parameter

        this.setState((prevState,props)=>({
            count: prevState.count + 1
        }),()=>{
            console.log(this.state.count)
        })
    }


    incrementFive(){
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
    }

    render() {
        return (
            <div>
                <div>count - {this.state.count}</div>
                <button onClick={() => this.incrementFive()}>Increment</button>
            </div>
        )
    }
}

export default Counter

