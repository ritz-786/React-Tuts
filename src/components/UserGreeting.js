import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: true
        }
    }
    

    render() {
        //Method 1

        // if(this.state.isLoggedIn){
        //     return(
        //         <div>
        //             Welcome Ritik
        //         </div>
        //     )
        // }else{
        //     return(
        //         <div>
        //             Welcome Guest
        //         </div>
        //     )
        // }

        // Method 2

        // let message;
        // if(this.state.isLoggedIn)
        // message = 'Welcome Ritik'
        // else
        // message = 'Welcome Guest'

        // return(
        //     <div>{message}</div>
        // )

        //Method 3 using ternary operator
        // return(this.state.isLoggedIn ? <div>Welcome Ritik</div> : <div>Welcome Guest</div>)

        //Method 4 short circuit method this is used to either show or hide on a based condition
        return (this.state.isLoggedIn && <div>Welcome Ritik</div>)
    }
}

export default UserGreeting
