import React, { Component } from 'react';
import Resizable from 're-resizable';
import Draggable from 'react-draggable';
import uuid from 'uuid';
import styled from 'styled-components';

import MinimizeTerminal from './MinimizeTerminal';
import Header from './/Header';
import Command from './Command';
// import '../App.css';

const FullScreen = styled.div`
  width: 100%;
  height: 100vh;
`;
class Terminal extends Component {
  state = {
    show: true,
    width: 600,
    height: 400,
    fullScreen: false,
    data: [],
    commandHistory: [],
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
      <Header fullScreen={() => this.setState({ fullScreen: !this.state.fullScreen })} hide={() => this.setState({ show: false })} />
      <Command
        randomId={this.randomId}
        onChange={(value) => value
          ? this.setState({
            data: [...this.state.data, value.newCommandAndData],
            commandHistory: value.commandHistory ? [...this.state.commandHistory, value.commandHistory] : this.state.commandHistory,
          })
          : this.setState({ data: [] })}
        data={this.state.data}
        onFullScreen={(() => this.setState({ fullScreen: true }))}
        onMinimize={() => this.setState({ fullScreen: false })}
        commandHistory={this.state.commandHistory}
      />
    </div>
  )
  render() {
    if (!this.state.show) {
      return (
        <MinimizeTerminal
          show={() => this.setState({ show: true })}
          fullScreen={() => this.setState({ fullScreen: true, show: true })}
        />
      );
    }
    if (this.state.fullScreen) {
      return (
        <FullScreen>
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
          size={{ width: this.state.width, height: this.state.height }}
          onResizeStop={(e, direction, ref, d) => {
            this.setState({
              width: this.state.width + d.width,
              height: this.state.height + d.height,
            });
          }}
        >
          {this.renderTerminalBody()}
        </Resizable>
      </Draggable>
    );
  }
}

export default Terminal;
