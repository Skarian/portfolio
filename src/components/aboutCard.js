import React from "react"
import styled from "styled-components"
import { Up, Down } from "../styles/media"
import Animate from "../components/animate"
import { navigate } from "gatsby"
import PropTypes from "prop-types"

const AboutMeCard = styled.div`
  width: 45vh;
  height: 45vh;
  min-height: 350px;
  min-width: 350px;
  margin: 10px;
  border: 10px solid #2f2e41;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding-left: 12.5%;
  padding-right: 12.5%;
  cursor: pointer;
  ${Down.md`
  padding-left: 5%;
  padding-right: 5%;
`};
`

const H1 = styled.h1`
  font-weight: bold;
  font-size: 36px;
  line-height: 44px;
  color: #000000;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  ${Down.md`
font-size: 32px;
  line-height: 40px;
`};
  ${Up.md`
font-size: 32px;
  line-height: 40px;
`};
  ${Up.lg`
font-size: 32px;
  line-height: 40px;
`};
  ${Up.xl`
font-size: 44px;
  line-height: 52px;
`};
`
const Description = styled.h3`
  font-size: 18px;
  line-height: 22px;
  color: #000000;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  ${Down.md`
  font-size: 16px;
  line-height: 20px;
`};
  ${Up.md`
  font-size: 16px;
  line-height: 20px;
`};
  ${Up.lg`
  font-size: 16px;
  line-height: 20px;
`};
  ${Up.xl`
  font-size: 18px;
  line-height: 22px;
`};
`
// Profile picture
const Image = styled.img`
  align-self: center;
  width: 75%;
  width: 200px;
  user-drag: none;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -ms-user-select: none;
`
const A = styled.a`
  text-decoration: none;
`

const AboutCard = ({
  heading,
  description,
  bgColor,
  imgSrc,
  route,
  externalLink,
}) => {
  return (
    <Animate button>
      <A href={externalLink}>
        <AboutMeCard
          style={{ background: `${bgColor}` }}
          onClick={() => {
            console.log("It has been clicked")
            if (route) {
              navigate(`${route}`)
            }
          }}
        >
          <H1>{heading}</H1>
          <Description>{description}</Description>
          <Image src={imgSrc} />
        </AboutMeCard>
      </A>
    </Animate>
  )
}

AboutCard.propTypes = {
  heading: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  imgSrc: PropTypes.string,
  route: PropTypes.string,
}

AboutCard.defaultProps = {
  heading: "Default heading",
  description: "Default description",
  bgColor: "#fff",
}

export default AboutCard
