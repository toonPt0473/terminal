import React, { Component } from 'react';
import Resizable from 're-resizable';
import Draggable from 'react-draggable';
import uuid from 'uuid';

import Header from './/Header';
import Command from './Command';
// import '../App.css';

class Terminal extends Component {
  state = {}
  randomId = uuid();
  autoFocusOnCommand = () => {
    if (document.getElementById(this.randomId)) {
      document.getElementById(this.randomId).focus();
    }
  }
  render() {
    return (
      <Draggable
        handle=".header"
        bounds="parent"
      >
        <Resizable defaultSize={{ width: 600, height: 350 }} >
          <div className="App" onClick={this.autoFocusOnCommand} >
            <Header />
            <Command randomId={this.randomId} />
          </div>
        </Resizable>
      </Draggable>
    );
  }
}

export default Terminal;
