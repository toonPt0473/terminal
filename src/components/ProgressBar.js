import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'

export class ProgressBar extends Component {
  state = {}
  render() {
    const Move = keyframes`
      0% {
        width: 0%
      }
      100% {
        width: ${this.props.percent}%
      }
    `
    const ProgressBarBg = styled.div`
      background-color: rgba(100,100,100,0.4);
      border-radius: 8px;
      padding: 2px;
      width: 100%;
      position: relative;
    `
    const Progress = styled.div`
      background-color: #ccc;
      height: 5px;
      border-radius: 5px;
      width: ${this.props.percent}%;
      animation: 3s ${Move} normal forwards ease-in-out;
    `
    const Name = styled.p`
      font-size: 12px;
      margin: 0;
    `
    const Rate = styled.p`
      font-size: 12px;
      margin: 0px;
      text-align: right;
    `
    return (
      <div style={{ width: this.props.width }} >
        <Name style={{ fontSize: 12, marginBottom: 0 }} >{this.props.name}</Name>
        <ProgressBarBg className="progress-bar" >
          <Progress />
        </ProgressBarBg>
        <Rate style={{ marginTop: 2, fontSize: 10 }} >{this.props.percent / 10}/10</Rate>
      </div>
    )
  }
}

export default ProgressBar
