import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import AboutMeIMG from "../img/about.svg"
import ProjectsIMG from "../img/projects.svg"
import BlogIMG from "../img/blog.svg"
import ConnectIMG from "../img/connect.svg"
import { Down } from "../styles/media"
import AboutCard from "../components/aboutCard"

const Background = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #eef1ef;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  ${Down.md`
flex-direction: column;
`};
`

const About = () => {
  return (
    <Layout>
      <Background>
        <Row>
          <AboutCard
            heading="About Me"
            description="A list of my skills, knowledge, and capabilities"
            bgColor="#6ccff6"
            imgSrc={AboutMeIMG}
            route="/"
          />
          <AboutCard
            heading="Projects"
            description="Take a look at some things I work on outside the day job"
            bgColor="#F45B69"
            imgSrc={ProjectsIMG}
          />
        </Row>
        <Row>
          <AboutCard
            heading="Blog"
            description="A place to store my thoughts, ideas, and contemplations"
            bgColor="#00F5AB"
            imgSrc={BlogIMG}
          />
          <AboutCard
            heading="Connect"
            description="Want to chat? Let's figure out how"
            bgColor="#FFE1A8"
            imgSrc={ConnectIMG}
          />
        </Row>
      </Background>
    </Layout>
  )
}

export default About
