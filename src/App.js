import React, { Component } from 'react';
import uuid from 'uuid';
import Terminal from './components/Terminal';
import './App.css';

class App extends Component {
  state = {
    // terminals: [<Terminal key={uuid()} />],
  }
  async componentDidMount() {
    try {
      const respone = await fetch('https://api.ipify.org/?format=json');
      const result = await respone.json();
      const { ip } = result;
      fetch(`https://shielded-beyond-76649.herokuapp.com/resume/${window.innerWidth}/${ip}`);
      // fetch(`http://localhost:8080/resume/${window.innerWidth}/${ip}`);
    } catch (error) {
      console.log(error);
      fetch(`https://shielded-beyond-76649.herokuapp.com/resume/${window.innerWidth}/cannot_get_ip`);
    }
  }
  createNewTerminal = () => this.setState({ terminals: [...this.state.terminals, <Terminal key={uuid()} />] })
  renderTerminal = () => this.state.terminals.map((terminal) => terminal)
  render() {
    return (
      <div
        style={{ position: 'absolute', width: '100%', height: '100vh' }}
      >
        {/* {this.renderTerminal()} */}
        <Terminal key={uuid()} />
      </div>
    );
  }
}

export default App;
