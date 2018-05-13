import React, { Component } from 'react';
import uuid from 'uuid';
import Terminal from './components/Terminal';
import './App.css';

class App extends Component {
  state = {
    terminals: [<Terminal key={uuid()} />],
  }
  createNewTerminal = () => this.setState({ terminals: [...this.state.terminals, <Terminal key={uuid()} />] })
  renderTerminal = () => this.state.terminals.map((terminal) => terminal)
  render() {
    return (
      <div
        style={{ position: 'absolute', width: '100%', height: '100vh' }}
      >
        {this.renderTerminal()}
      </div>
    );
  }
}

export default App;
