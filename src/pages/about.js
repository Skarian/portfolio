import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import Neil from "../img/neil.png"
import { Up, Down } from "../styles/media"
import BackButton from "../components/backButton"

const wireframes = false

const Background = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${Neil});
  background-repeat: no-repeat;
  background-position: center;
  background-color: rgba(255, 255, 255, 0.95);
  background-blend-mode: lighten;
`

const Skills = styled.div`
  display: flex;
  width: 80vw;
  height: 40vh;
  border: ${wireframes ? "1px blue solid;" : "none;"};
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`
// Heading
const H1 = styled.h1`
  font-style: normal;
  font-weight: bold;
  color: #000;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  ${Down.md`
  font-size: 48px;
`};
  ${Up.md`
  font-size: 72px;
`};
  ${Up.lg`
  font-size: 72px;
`};
`

const About = () => {
  return (
    <Layout>
      <Background>
        <BackButton route="/directory/" />
        <Skills>
          <H1>Hi, still working on this page</H1>
          <H1>Coming soon!</H1>
        </Skills>
      </Background>
    </Layout>
  )
}

export default About
