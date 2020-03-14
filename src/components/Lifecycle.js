import React, { Component } from 'react'
import LifecycleB from './LifecycleB';

class Lifecycle extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Ritik'
        }
        console.log('LifecycleA Constructor');
        
    }

    static getDerivedStateFromProps(props,state){
        console.log('Lifecycle A getDerviedStateFromProps')
        return null
    }

    componentDidMount(){
        console.log('LifecycleA ComponentDidMount')
    }

    shouldComponentUpdate(){
        console.log('LifecycleA Should Component Update Called')
        return true
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('LifecycleA getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate(){
        console.log('LifecylceA componentDidUpdate')
    }

    changeState = () =>{
        this.setState({
            name: 'Codevolution'
        })
    }

    render() {
        console.log('LifecycleA render')
        return (
            <div>
                <div>LifecycleA</div>
                <button onClick={this.changeState}>Change state</button>
                <LifecycleB></LifecycleB>
            </div>
        )
    }
}

export default Lifecycle
