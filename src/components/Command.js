import React, { Component } from 'react';
import Cowsay from 'react-cowsay';
import _ from 'lodash';

const commandName = 'guest@Paitoon\'s Resume ~ $';
const allCommand = [
  {
    name: 'name',
    detail: 'show fullname',
  },
  {
    name: 'profile',
    detail: 'when call this operateion, Will show my profile',
  },
  {
    name: 'git',
    detail: 'show my git',
  },
  {
    name: 'skill',
    detail: 'develop skills rating',
  },
  {
    name: 'framework',
    detail: 'framework that i ever userd',
  },
  {
    name: 'work',
    detail: 'my work experience',
  },
  {
    name: 'contact',
    detail: 'my contact',
  },
  {
    name: 'max',
    detail: 'show the fullscreen',
  },
  {
    name: 'min',
    detail: 'show minimize screen (can resize and dragable)',
  },
  {
    name: 'clear',
    detail: 'clear all data on terminal',
  },
];
export class Command extends Component {
  state = {
    ctrl: false,
  }
  componentDidMount() {
    document.getElementById(this.props.randomId).focus();
  }
  componentWillUpdate() {
    window.scrollBy(0, 50);
  }

  onPressEnter =(e) => {
    if (e.which === 13) {
      const command = document.getElementById(this.props.randomId).textContent;
      this.checkCommand(command);
    }
  }
  onCtrlC = (e) => {
    if (this.state.ctrl && e.which === 67) {
      this.pushNewData('^C');
    }
  }
  onClear = () => {
    const commandLine = document.getElementById(this.props.randomId);
    commandLine.innerHTML = '';
    // return this.setState({ data: [] });
    return this.props.onChange();
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
  pushNewData = async (command, response) => {
    const commandLine = document.getElementById(this.props.randomId);
    const help = `${commandLine.textContent}: command not found. Please type "--help"`;
    // const { data } = this.state;
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
    // data.push(newCommandAndData);
    // await this.setState({ data });
    if (this.props.onChange) {
      this.props.onChange(newCommandAndData);
    }
    commandLine.innerHTML = '';
  }
  checkCommand = async (input) => {
    let response = '';
    let command = input;

    _.times(2, () => {
      if (command[0] === '-') {
        command = command.substring(1);
      }
    });

    if (command === 'clear') {
      return this.onClear();
    }
    if (command === 'name') {
      const options = ['b', 'd', 'g', 'p', 's', 't', 'w', 'y'];
      const randomOption = options[Math.floor(Math.random() * options.length)];
      const cowSayDisplay = { [randomOption]: true };
      response = <Cowsay {...cowSayDisplay} >My name is Paitoon Arayasatjapong</Cowsay>;
    }
    if (command === 'max') {
      this.props.onFullScreen();
      response = ' ';
    }
    if (command === 'min') {
      this.props.onMinimize();
      response = ' ';
    }
    if (command === 'profile') {
      this.props.onFullScreen();
      response = 'profile';
    }
    if (command === 'help' || command === 'h') {
      response = (
        <div style={{ marginLeft: 10 }} >
          Operation command :
          {allCommand.map((cmd) => (
            <div style={{ marginLeft: 20, display: 'flex' }} key={cmd.detail} >
              <div style={{ flex: 2 }} >{cmd.name}</div>
              <div style={{ flex: 6 }} >{cmd.detail}</div>
            </div>
          ))}
        </div>
      );
    }
    return this.pushNewData(null, response);
  }
  renderData = () => this.props.data.map((item, index) => (
    <div key={index.toString()} className="command-item" >
      {item}
    </div>
  ))

  render() {
    return (
      <div id="scroll-bottom" style={{ paddingLeft: 3 }} >
        {this.renderData()}
        <div>
          {commandName}
          <span
            contentEditable
            onKeyDown={this.onKeyDown}
            onKeyUp={this.onKeyUp}
            className="editable"
            id={this.props.randomId}
          />
        </div>
      </div>
    );
  }
}

export default Command;
