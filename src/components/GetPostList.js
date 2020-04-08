import React, { Component } from 'react'
import axios from 'axios'

class GetPostList extends Component {

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                console.log(response)
                this.setState({
                    posts: response.data
                })
            })
            .catch( e => console.log(e))
    }

    constructor(props) {
        super(props)
    
        this.state = {
             posts : []
        }
    }
    

    render() {
        const {posts} = this.state;
        return (
            <div>
                List Of Posts
                {
                    posts.length ?
                    posts.map(post =>  <div key={post.id}>{post.title}</div>) :
                    null
                }
            </div>
        )
    }
}

export default GetPostList
