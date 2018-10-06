import React, { Component } from 'react';
import styled from 'styled-components';

const ContactContainer = styled.div`
  box-shadow: 0px 0px 2px #ddd;
  border-radius: 4px;
  overflow: hidden;
  width: 350px;
  display: flex;
  align-items: center;
  padding: 2px 10px;
`;

const contact = [
  {
    iconClass: 'fab fa-line fa-2x',
    text: 'Line-ID: ttoonoott',
  },
  {
    iconClass: 'fas fa-mobile-alt fa-2x',
    text: 'Mobile: 083-1444100, 080-1427301',
  },
  {
    iconClass: 'far fa-envelope fa-2x',
    text: 'Email: rimb9pkmink@gmail.com',
  },
  {
    iconClass: 'far fa-clock fa-2x',
    text: 'Contact-time: 24/7',
  },
];
const IconContainer = styled.div`
  width: 70px;
  text-align: center;
`;

export class Contact extends Component { // eslint-disable-line
  renderContact = () => contact.map((item, index) => (
    <ContactContainer key={index.toString()} >
      <IconContainer>
        <i className={item.iconClass} />
      </IconContainer>
      <div>
        {item.text}
      </div>
    </ContactContainer>
  ))
  render() {
    return (
      <div style={{ margin: '10px 5px' }} >
        {this.renderContact()}
      </div>
    );
  }
}

export default Contact;
