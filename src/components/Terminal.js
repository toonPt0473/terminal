import React, { Component } from 'react';
import Resizable from 're-resizable';
import Draggable from 'react-draggable';
import uuid from 'uuid';
import styled from 'styled-components';

import Header from './/Header';
import Command from './Command';
// import '../App.css';

const FullScreen = styled.div`
  width: 100%;
  height: 100%;
`;
class Terminal extends Component {
  state = {
    width: 600,
    height: 400,
    fullScreen: false,
    data: [],
    controlledPosition: {
      x: (window.innerWidth / 2) - 300,
      y: (window.innerHeight / 2) - 200,
    },
  }
  randomId = uuid();
  autoFocusOnCommand = () => {
    if (document.getElementById(this.randomId)) {
      document.getElementById(this.randomId).focus();
    }
    // this.setState({ fullScreen: !this.state.fullScreen });
  }
  controlledDrag = (e, position) => {
    const { x, y } = position;
    this.setState({ controlledPosition: { x, y } });
  }
  renderTerminalBody = () => (
    <div className="App" onClick={this.autoFocusOnCommand} id="terminal" >
      <Header fullScreen={() => this.setState({ fullScreen: !this.state.fullScreen })} />
      <Command
        randomId={this.randomId}
        onChange={(value) => value ? this.setState({ data: [...this.state.data, value] }) : this.setState({ data: [] })}
        data={this.state.data}
        onFullScreen={(() => this.setState({ fullScreen: true }))}
        onMinimize={() => this.setState({ fullScreen: false })}
      />
    </div>
  )
  render() {
    if (this.state.fullScreen) {
      return (
        <FullScreen>
          {/* <div className="App" onClick={this.autoFocusOnCommand} >
            <Header fullScreen={() => this.setState({ fullScreen: !this.state.fullScreen })} />
            <Command
              randomId={this.randomId}
              onChange={(value) => value ? this.setState({ data: [...this.state.data, value] }) : this.setState({ data: [] })}
              data={this.state.data}
            />
          </div> */}
          {this.renderTerminalBody()}
        </FullScreen>
      );
    }
    return (
      <Draggable
        handle=".header"
        bounds="parent"
        onDrag={this.controlledDrag}
        position={this.state.controlledPosition}
      >
        <Resizable
          // defaultSize={{ width: 600, height: 400 }}
          size={{ width: this.state.width, height: this.state.height }}
          onResizeStop={(e, direction, ref, d) => {
            this.setState({
              width: this.state.width + d.width,
              height: this.state.height + d.height,
            });
          }}
        >
          {/* <div className="App" onClick={this.autoFocusOnCommand}>
            <Header fullScreen={() => this.setState({ fullScreen: !this.state.fullScreen })} />
            <Command
              randomId={this.randomId}
              onChange={(value) => value ? this.setState({ data: [...this.state.data, value] }) : this.setState({ data: [] })}
              data={this.state.data}
            />
          </div> */}
          {this.renderTerminalBody()}
        </Resizable>
      </Draggable>
    );
  }
}

export default Terminal;
