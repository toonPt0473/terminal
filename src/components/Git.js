import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  flex-wrap: wrap;
  display: flex;
  align-items: center;
  margin: 20px;
  box-sizing: border-box;
`;
const ImageContainer = styled.div`
  width: 100px;
  height: 100px;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  margin: auto;
  /* margin-right: 20px; */
`;
const TextContainer = styled.p`
  margin-bottom: 0px;
  width: 100%;
  text-align: center;
  color: #bdbdbd;
  margin-top: 4px;
  margin-bottom: 15px;
  font-size: 12px;
`;

const options = {
  git: [
    {
      link: 'https://gitlab.com/ttoonoott',
      image: 'https://www.ocadotechnology.com/wp-content/uploads/2017/07/gitlab-stacked_wm_no_bg-300x300.png',
      name: 'Gitlab',
    },
    {
      link: 'https://github.com/toonPt0473',
      image: 'https://assets-cdn.github.com/images/modules/logos_page/Octocat.png',
      name: 'Github',
    },
  ],
  framework: [
    {
      link: 'https://expressjs.com/',
      image: 'https://i2.wp.com/www.algorithmtut.com/wp-content/uploads/2016/03/maxresdefault.jpg?resize=752%2C440&ssl=1',
      name: 'ExpressJs',
    },
    {
      link: 'https://loopback.io/',
      image: 'https://cdn-images-1.medium.com/max/300/0*mzZmHlu6vXwC5G6N.png',
      name: 'Loopback',
    },
    {
      link: 'https://redux.js.org/',
      image: 'https://cdn-images-1.medium.com/max/312/1*SRL22ADht1NU4LXUeU4YVg.png',
      name: 'Redux',
    },
    {
      link: 'https://github.com/redux-saga/redux-saga',
      image: 'https://camo.githubusercontent.com/4354872161943c4ae2ceec2a946dec85b96799b8/68747470733a2f2f72656475782d736167612e6a732e6f72672f6c6f676f2f303830302f52656475782d536167612d4c6f676f2d4c616e6473636170652e706e67',
      name: 'Redux saga',
    },
    {
      link: 'https://jquery.com/',
      image: 'http://massagedarmani.com/wp-content/uploads/2016/08/jquery-logo.png',
      name: 'Jquery',
    },
    {
      link: 'https://ant.design/',
      image: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
      name: 'Antd',
    },
    {
      link: 'https://react.semantic-ui.com/',
      image: 'https://react.semantic-ui.com/logo.png',
      name: 'React-semantic',
    },
    {
      link: 'https://getbootstrap.com/',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Boostrap_logo.svg/200px-Boostrap_logo.svg.png',
      name: 'Bootstrap',
    },
    {
      link: 'https://bulma.io/',
      image: 'https://bulma.io/images/bulma-logo.png',
      name: 'Bulma',
    },
  ],
};

export class Git extends Component { // eslint-disable-line
  renderGrid = (type) => options[type].map((item) => (
    <a href={item.link} target="_blank" style={{ marginRight: 20, textDecoration: 'none' }} >
      <ImageContainer style={{ backgroundImage: `url(${item.image})` }} />
      <TextContainer>{item.name}</TextContainer>
    </a>
  ))
  render() {
    return (
      <Container>
        {this.renderGrid(this.props.type)}
      </Container>
    );
  }
}

export default Git;
