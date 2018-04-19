import React, { Component } from 'react';
import Header from './components/Header'
import Command from './components/Command'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  autoFocusOnCommand = () => {
    if (document.getElementById("editable")) {
      document.getElementById("editable").focus();
    }
  }
  render() {
    return (
      <div className="App" onClick={this.autoFocusOnCommand} >
        <Header />
        <Command />
      </div>
    );
  }
}

export default App;
