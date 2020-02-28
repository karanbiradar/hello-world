import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Greet} from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import counter from './components/counter'
import FunctionClick from './components/FunctionClick';
import ClassCLick from './components/ClassCLick';

class App extends Component{
  render(){
  return (
    <div className="App">
    {/*<FunctionClick></FunctionClick>
    <ClassCLick></ClassCLick>*/}
    {/*<counter></counter>*/}
    {/*<Message></Message>*/}
      <Greet name ="Bruce" heroname="BatMan"><p>This is children props</p></Greet>
      <Greet name ="Clark" heroname="Superman"><button>Action</button></Greet>
      <Greet name ="Diana" heroname="Wonder Women"></Greet>
      <Welcome name ="Bruce" heroname="BatMan"></Welcome>
      <Welcome name ="Clark" heroname="Superman"></Welcome>
      <Welcome name ="Diana" heroname="Wonder Women"></Welcome>
      {/* Hey how is it going*/}
    {/*<Hello></Hello>*/}
    </div>
  );
}
}


export default App;
