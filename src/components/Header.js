import React, { Component } from 'react';

export class Header extends Component {
  state = {}
  render() {
    return (
      <div className="header" onDoubleClick={this.props.fullScreen} >
        <div className="header-button" ><p>x</p></div>
        <div className="header-button minimize" onClick={this.props.hide} ><p>&ndash;</p></div>
        <div className="header-button fullscreen" onClick={this.props.fullScreen} ><p>&#x25A1;</p></div>
        <p style={{ marginLeft: 5 }} >Terminal</p>
      </div>
    );
  }
}

export default Header;
