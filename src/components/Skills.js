import React, { Component } from 'react';
import ProgressBar from './ProgressBar';

export class Skill extends Component { // eslint-disable-line
  state = {
  }

  render() {
    return (
      <div>
        <ProgressBar width="350px" percent={50} name="HTML" />
        <ProgressBar width="350px" percent={60} name="Javascipt" />
        <ProgressBar width="350px" percent={50} name="Css" />
        <ProgressBar width="350px" percent={60} name="ReactJS" />
        <ProgressBar width="350px" percent={40} name="React-Native" />
        <ProgressBar width="350px" percent={45} name="NodeJS" />
        <ProgressBar width="350px" percent={35} name="Mongo" />
        <ProgressBar width="350px" percent={50} name="Git" />
        <ProgressBar width="350px" percent={65} name="Self-learning" />
        <ProgressBar width="350px" percent={80} name="Comnunicate with team" />
      </div>
    );
  }
}

export default Skill;
