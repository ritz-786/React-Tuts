import React, { PureComponent } from 'react'
import RegComp from './RegComp'
import PureComp from './PureComp'

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
                <RegComp name = {this.state.name}/>
                <PureComp name = {this.state.name}></PureComp>
            </div>
        )
    }
}

export default ParentComp
