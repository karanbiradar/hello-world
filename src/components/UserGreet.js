import React, {Component} from 'react'

class UserGreet extends Component{
    constructor(props){
        super(props)
        this.state= {
            isLoggedIn: false
        }
    }
    render(){
        return this.state.isLoggedIn && <div>Welcome Karan</div>
        // return(
        //     this.state.isLoggedIn ?
        //     (<div>Welcome Karan</div>):
        //     (<div>Welcome Guest</div>)
        // )
        // if(this.state.isLoggedIn){
        //     return(
        //         <div> Welcome Karan</div>)
        // }else{
        //     return(
        //         <div>Welcome Guest</div>
        //     )
        // }
        // return(
        //     <div>
        //     <div> Welcome Karan</div>
        //     <div> Welcome Guest</div>
        //     </div>
        // )
    }
}

export default UserGreet