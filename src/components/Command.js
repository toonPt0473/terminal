import React, { Component } from 'react';

const commandName = 'guest@Paitoon\'s Resume ~ $';
export class Command extends Component {
  state = {
    ctrl: false,
    data: [],
  }
  componentDidMount() {
    document.getElementById('editable').focus();
  }
  componentWillUpdate() {
    window.scrollBy(0, 50);
  }

  onPressEnter =(e) => {
    if (e.which === 13) {
      const command = document.getElementById('editable').textContent;
      this.checkCommand(command);
    }
  }
  onCtrlC = (e) => {
    if (this.state.ctrl && e.which === 67) {
      this.pushNewData('^C');
    }
  }
  onClear = () => {
    const commandLine = document.getElementById('editable');
    commandLine.innerHTML = '';
    return this.setState({ data: [] });
  }
  onKeyDown = (e) => {
    if (e.which === 17) {
      this.setState({ ctrl: true });
    }
    this.onCtrlC(e);
    this.onPressEnter(e);
  }
  onKeyUp = (e) => {
    if (e.which === 17) {
      this.setState({ ctrl: false });
    }
  }
  pushNewData = (command, response) => {
    const commandLine = document.getElementById('editable');
    const help = `${commandLine.textContent}: command not found. Please type "--help"`;
    const { data } = this.state;
    const newCommandAndData = (
      <div>
        <div className="command-item" >
          {commandName}  {commandLine.textContent}{command || ''}
        </div>
        <div className="command-item" >
          {response === '' ? help : response}
        </div>
      </div>
    );
    data.push(newCommandAndData);
    this.setState({ data });
    commandLine.innerHTML = '';
  }
  checkCommand = async (command) => {
    let response = '';
    if (command === 'clear') {
      return this.onClear();
    }
    if (command === 'name') {
      response = 'Paitoon Arayasatjapong';
    }
    if (command === '--help' || command === '-help' || command === '-h' || command === '--h') {
      response = (
        <div style={{ marginLeft: 10 }} >
          Operation command :
        </div>
      );
    }
    return this.pushNewData(null, response);
  }
  renderData = () => this.state.data.map((item, index) => (
    <div key={index.toString()} className="command-item" >
      {item}
    </div>
  ))

  render() {
    return (
      <div id="scroll-bottom" >
        {this.renderData()}
        <div>
          {commandName}
          <span
            contentEditable
            onKeyDown={this.onKeyDown}
            onKeyUp={this.onKeyUp}
            id="editable"
          >
          </span>
        </div>
      </div>
    );
  }
}

export default Command;
