import React, {Component} from 'react'

class ClassCLick extends Component{
    clickHandler(){
        console.log('Clicked the button')
    }
render(){
    return(
        <div>
        <button onClick={this.clickHandler}>Clcik Me</button>
        </div>
    )
}
}
 
export default ClassCLick