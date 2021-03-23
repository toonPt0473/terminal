import React from 'react'
import styled from 'styled-components'

const Minimize = styled.div`
  width: 360px;
  position: fixed ;
  bottom: 0 ;
  right: 0 ;
  color: white;
  height: 25px;
  background-color: #3f3e3a;
  display: flex;
  align-items: center;
  padding-left: 5px;
  font-size: 14px;
  z-index: 10;
  border-top-left-radius:4px;
  border-top-right-radius: 4px;
`

const MinimizeTerminal = (props) => (
  <Minimize onDoubleClick={props.fullScreen} >
    <div className="header-button" ><p>x</p></div>
    <div className="header-button minimize" onClick={props.show} ><p>&ndash;</p></div>
    <div className="header-button fullscreen" onClick={props.fullScreen} ><p>&#x25A1;</p></div>
    <p style={{ marginLeft: 5 }} >Terminal</p>
  </Minimize>
)

export default MinimizeTerminal
