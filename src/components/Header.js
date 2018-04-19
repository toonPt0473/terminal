import React, { Component } from 'react';

export class Header extends Component {
  state = {}
  render() {
    return (
      <div className="header" >
        <div className="header-button" ><p>x</p></div>
        <div className="header-button minimize" ><p>&ndash;</p></div>
        <div className="header-button fullscreen" ><p>&#x25A1;</p></div>
        <p style={{ marginLeft: 5 }} >Terminal</p>
      </div>
    );
  }
}

export default Header;
