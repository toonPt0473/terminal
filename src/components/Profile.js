import React from 'react'
import styled from 'styled-components'
import Skills from './Skills'
import Contact from './Contact'

const Container = styled.div`
  width: 100%;
  margin-bottom: 15px;
  max-width: 900px;
  margin: auto;
`
const ComponentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Label = styled.p`
  font-size: 20px;
  margin: 0;
`
const FlexSpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 20px;
  min-width: 400px;
  box-sizing: 'border-box';
`
const TextProfile = styled.p`
  font-size: 16px;
  margin: 2px 0;
`

const About = () => (
  <FlexSpaceBetween>
    <div style={{ marginRight: 40 }}>
      <TextProfile>Fullname: Paitoon Arayasatjapong</TextProfile>
      <TextProfile>Sex: male</TextProfile>
      <TextProfile>Birthdate: 23 Aug 2531</TextProfile>
      <TextProfile>
        Education: ComEngineer At KKU <strong style={{ color: 'red' }}>(Drop-out)</strong>
      </TextProfile>
    </div>
    <div>
      <TextProfile>Address : 336/18 Nai muang Sub-district, Muang District, Khonkaen</TextProfile>
      <TextProfile>
        Gitlab:{' '}
        <a href="https://gitlab.com/ttoonoott" target="_blank" style={{ color: 'white' }}>
          https://gitlab.com/ttoonoott
        </a>
      </TextProfile>
      <TextProfile>
        Github:{' '}
        <a href="https://github.com/toonPt0473" target="_blank" style={{ color: 'white' }}>
          https://github.com/toonPt0473
        </a>{' '}
      </TextProfile>
      <TextProfile>Expect salary: 50000 - 60000 THB</TextProfile>
    </div>
  </FlexSpaceBetween>
)

export const Profile = () => (
  <Container>
    <ComponentContainer>
      <Label>About</Label>
      <About />
    </ComponentContainer>
    <FlexSpaceBetween>
      <ComponentContainer>
        <Label>Skills</Label>
        <Skills />
      </ComponentContainer>
      <ComponentContainer>
        <Label>Contact</Label>
        <Contact />
      </ComponentContainer>
    </FlexSpaceBetween>
  </Container>
)

export default Profile
