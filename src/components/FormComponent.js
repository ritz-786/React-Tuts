import React, { Component } from 'react'

class FormComponent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             username: '',
             comments: '',
             topic: 'react'
        }
    }
    
    handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        })
        // console.log(event.target.value)
    } 

    handleCommentsChange = event => {
        this.setState({
            comments : event.target.value
        })
    }

    handleTopicChange = event => {
        this.setState({
            topic: event.target.value
        },() => console.log(this.state.topic))
        
    }

    handleSubmit = event => {
        alert(`${this.state.username}  ${this.state.comments} ${this.state.topic}`)
        //to retain the data after form gets submitted
        event.preventDefault()
    }

    render() {
        const {username,comments} = this.state
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Username</label>
                    <input
                        type='text'
                        value = {username}
                        onChange = {this.handleUsernameChange}
                        />
                </div>
                <div>
                    <label>Comments</label>
                    <textarea
                    value = {comments}
                    onChange = {this.handleCommentsChange}>
                    </textarea>
                </div>
                <div>
                    <label>Topic</label>
                    <select onChange={this.handleTopicChange}>
                        <option value = "react" >React</option>
                        <option value = "Angular">Angular</option>
                        <option value = "Vue">Vue</option>
                    </select>
                </div>
                <button type='submit'>Submit</button>
            </form>
        )
    }
}

export default FormComponent

