import React, { Component } from 'react';
import Resizable from 're-resizable';
import Draggable from 'react-draggable';
import uuid from 'uuid';

import Header from './/Header';
import Command from './Command';
// import '../App.css';

class Terminal extends Component {
  state = {
    width: '100%',
    height: '768',
    // fullScreen: true,
  }
  randomId = uuid();
  autoFocusOnCommand = () => {
    if (document.getElementById(this.randomId)) {
      document.getElementById(this.randomId).focus();
    }
  }

  // renderTerminal = () => {
  //   if (this.state.fullScreen) {
  //     return
  //   }
  // }
  render() {
    console.log(this.state.fullHeight);

    return (
      <div style={{ maxWidth: '100%', maxHeight: '100vh' }} className="dragable-container" >
        <Draggable
          handle=".header"
          bounds="parent"
        >
          <Resizable
            defaultSize={{ width: 600, height: 400 }}
            size={{ width: this.state.width, height: this.state.height }}
            onResizeStop={(e, direction, ref, d) => {
              this.setState({
                width: this.state.width + d.width,
                height: this.state.height + d.height,
              });
            }}
          >
            <div className="App" onClick={this.autoFocusOnCommand} style={{ position: 'sticky', top: 5 }} >
              <Header />
              <Command randomId={this.randomId} />
            </div>
          </Resizable>
        </Draggable>
      </div>
    );
  }
}

export default Terminal;
