import React, { PureComponent, Component } from 'react'
import RegComp from './RegComp'
import PureComp from './PureComp'
import MemoComp from './MemoComp'

// making parent Component pure make their child component pure too

export class ParentComp extends PureComponent {

    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Ritik'
        }
    }
    
    componentDidMount(){
        setInterval(() => {
            this.setState({
                name: 'Ritik'
            })
        },2000)
    }

    render() {
        console.log('Parent Component')
        return (
            <div>
                Parent Component
                <MemoComp name = {this.props.name}/>
                {/* <RegComp name = {this.state.name}/>
                <PureComp name = {this.state.name}></PureComp> */}
            </div>
        )
    }
}

export default ParentComp
