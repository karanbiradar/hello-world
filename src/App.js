import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Greet} from './components/Greet'
import Inline from './components/Inline'
import Stylesheet from './components/Stylesheet'
import Form from './components/Form'
//import './appStyle.css'
//import styles from './appStyle.module.css'

class App extends Component{
  render(){
  return (
    <div className="App">
    <Form></Form>
    {/*<h1 className ='error'>Error</h1>
  <h1 className= {styles.success}>Success</h1>
    <Inline></Inline>
<Stylesheet primary={false}></Stylesheet>*/}
    </div>
  );
}
}


export default App;
