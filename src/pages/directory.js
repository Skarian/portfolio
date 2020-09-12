import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import AboutMeIMG from "../img/about.svg"
import ProjectsIMG from "../img/projects.svg"
import BlogIMG from "../img/blog.svg"
import ConnectIMG from "../img/connect.svg"
import { Down } from "../styles/media"
import AboutCard from "../components/aboutCard"
import BackButton from "../components/backButton"

const Background = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #eef1ef;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const FirstRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  ${Down.md`
flex-direction: column;
margin-top: 50px;
`};
`

const SecondRow = styled.div`
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

const Directory = () => {
  return (
    <Layout>
      <Background>
        <BackButton route="/" />
        <FirstRow>
          <AboutCard
            heading="About Me"
            description="A list of my skills, knowledge, and capabilities"
            bgColor="#6ccff6"
            imgSrc={AboutMeIMG}
            externalLink="https://www.notion.so/About-me-78347e897e964cca992eac922d02ab6b"
          />

          <AboutCard
            heading="Projects"
            description="Take a look at some things I work on outside the day job"
            bgColor="#F45B69"
            imgSrc={ProjectsIMG}
            externalLink="https://www.notion.so/129861b0669049679e1c3a56237acee8?v=6eb2ad7444d345cf8562f0d9218ec73a"
          />
        </FirstRow>
        <SecondRow>
          <AboutCard
            heading="Blog"
            description="A place to store my thoughts, ideas, and contemplations"
            bgColor="#00F5AB"
            imgSrc={BlogIMG}
            externalLink="https://blog.neilskaria.com"
          />
          <AboutCard
            heading="Connect"
            description="Want to chat? Let's figure out how"
            bgColor="#FFE1A8"
            imgSrc={ConnectIMG}
            externalLink="https://calendly.com/neil-skaria"
          />
        </SecondRow>
      </Background>
    </Layout>
  )
}

export default Directory
