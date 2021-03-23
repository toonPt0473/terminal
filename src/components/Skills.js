import React from 'react'
import ProgressBar from './ProgressBar'

export const Skill = () => (
  <div>
    <ProgressBar width="350px" percent={70} name="HTML" />
    <ProgressBar width="350px" percent={75} name="Javascipt" />
    <ProgressBar width="350px" percent={70} name="Css" />
    <ProgressBar width="350px" percent={75} name="ReactJS" />
    <ProgressBar width="350px" percent={40} name="React-Native" />
    <ProgressBar width="350px" percent={70} name="NodeJS" />
    <ProgressBar width="350px" percent={60} name="Graphql" />
    <ProgressBar width="350px" percent={70} name="Mongo" />
    <ProgressBar width="350px" percent={60} name="Docker" />
    <ProgressBar width="350px" percent={20} name="Kubernetes" />
    <ProgressBar width="350px" percent={70} name="Git" />
    <ProgressBar width="350px" percent={70} name="Self-learning" />
    <ProgressBar width="350px" percent={80} name="Comnunicate with team" />
  </div>
)

export default Skill
