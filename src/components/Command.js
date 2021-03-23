import React, { Component } from 'react'
import Cowsay from 'react-cowsay'
import _ from 'lodash'
import styled from 'styled-components'

import Skills from './Skills'
import Git from './Git'
import Profile from './Profile'
import Work from './Work'
import Contact from './Contact'
import { commandName, allCommand, cowsayOptions } from './constant'

const CommandContainer = styled.div`
  padding-left: 3px;
  overflow-x: hidden;
  width: 100%;
  box-sizing: border-box;
`

export class Command extends Component {
  state = {
    ctrl: false,
    indexHistory: this.props.commandHistory.length,
  }
  componentDidMount() {
    this.commandLine = document.getElementById(this.props.randomId)
    document.getElementById(this.props.randomId).focus()
  }
  shouldComponentUpdate() {
    return true
  }
  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      const objDiv = document.getElementById('scroll-bottom')
      document.getElementById('terminal').scrollBy(0, objDiv.scrollHeight)
    }
  }

  onPressEnter =(e) => {
    if (e.which === 13) {
      this.checkCommand(this.commandLine.textContent)
    }
  }
  onCtrlC = (e) => {
    if (this.state.ctrl && e.which === 67) {
      this.pushNewData('^C', ' ')
    }
  }
  onClear = () => {
    this.commandLine.innerHTML = ''
    return this.props.onChange()
  }
  onKeyDown = (e) => {
    if (e.which === 17) {
      this.setState({ ctrl: true })
    }
    if (e.which === 38) {
      this.commandLine.textContent = this.props.commandHistory[this.state.indexHistory - 1]
      if (this.state.indexHistory > 0) {
        this.setState({ indexHistory: this.state.indexHistory - 1 })
      }
    }
    if (e.which === 40) {
      this.commandLine.textContent = this.props.commandHistory[this.state.indexHistory + 1]
      if (this.state.indexHistory < this.props.commandHistory.length) {
        this.setState({ indexHistory: this.state.indexHistory + 1 })
      }
    }
    this.onCtrlC(e)
    this.onPressEnter(e)
  }
  onKeyUp = (e) => {
    if (e.which === 17) {
      this.setState({ ctrl: false })
    }
  }

  pushNewData = (command, response) => {
    const help = `${this.commandLine.textContent}: command not found. Please type "--help"`
    if (this.commandLine.textContent) {
      this.setState({ indexHistory: this.props.commandHistory.length + 1 })
    }
    const newCommandAndData = (
      <div>
        <div className="command-item" >
          {commandName(this.props.ip)}  {this.commandLine.textContent}{command || ''}
        </div>
        <div className="command-item" >
          {!response ? help : response}
        </div>
      </div>
    )
    if (this.props.onChange) {
      this.props.onChange({ newCommandAndData, commandHistory: this.commandLine.textContent })
    }
    this.commandLine.innerHTML = ''
  }
  checkCommand = (input) => {
    let response = false
    let command = input.toLowerCase()
    _.times(2, () => {
      if (command[0] === '-') {
        command = command.substring(1)
      }
    })
    if (command === '') {
      response = ' '
    }
    if (command === 'clear') {
      return this.onClear()
    }
    if (command === 'name') {
      const randomOption = cowsayOptions[Math.floor(Math.random() * cowsayOptions.length)]
      const cowSayDisplay = { [randomOption]: true }
      response = <Cowsay {...cowSayDisplay} >My name is Paitoon Arayasatjapong</Cowsay>
    }
    if (command === 'max') {
      this.props.onFullScreen()
      response = ' '
    }
    if (command === 'min') {
      this.props.onMinimize()
      response = ' '
    }
    if (command === 'profile') {
      this.props.onFullScreen()
      response = 'profile'
    }
    if (command === 'skill') {
      response = <Skills />
    }
    if (command === 'git') {
      response = <Git type="git" />
    }
    if (command === 'framework') {
      response = <Git type="framework" />
    }
    if (command === 'profile') {
      response = <Profile />
    }
    if (command === 'work') {
      response = <Work />
    }
    if (command === 'contact') {
      response = <Contact />
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
      )
    }
    return this.pushNewData(null, response)
  }
  renderData = () => this.props.data.map((item, index) => (
    <div key={index.toString()} className="command-item" >
      {item}
    </div>
  ))

  render() {
    return (
      <CommandContainer id="scroll-bottom" >
        {this.renderData()}
        <div>
          {commandName(this.props.ip)}
          <span
            contentEditable
            onKeyDown={this.onKeyDown}
            onKeyUp={this.onKeyUp}
            className="editable"
            id={this.props.randomId}
          />
        </div>
      </CommandContainer>
    )
  }
}

export default Command
