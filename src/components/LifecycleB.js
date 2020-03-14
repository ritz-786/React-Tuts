import React, { Component } from 'react'

class LifecycleB extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Ritik'
        }
        console.log('LifecycleB Constructor');
        
    }

    static getDerivedStateFromProps(props,state){
        console.log('LifecycleB getDerviedStateFromProps')
        return null
    }
    
    componentDidMount(){
        console.log('LifecycleB ComponentDidMount')
    }

    shouldComponentUpdate(){
        console.log('LifecycleB Should Component Update Called')
        return true
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('LifecycleB getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate(){
        console.log('LifecylceB componentDidUpdate')
    }


    render() {
        console.log('LifecycleB render')
        return (
            <div>
                LifecycleB
            </div>
        )
    }
}

export default LifecycleB
