import React, { Component } from 'react';
import Resizable from 're-resizable';

import Header from './components/Header';
import Command from './components/Command';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  autoFocusOnCommand = () => {
    if (document.getElementById('editable')) {
      document.getElementById('editable').focus();
    }
  }
  render() {
    return (
      <Resizable defaultSize={{ width: 320, height: 200 }} >
        <div className="App" onClick={this.autoFocusOnCommand} >
          <Header />
          <Command />
        </div>
      </Resizable>
    );
  }
}

export default App;
