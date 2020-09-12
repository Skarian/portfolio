import React from "react"
import styled from "styled-components"
import { Down } from "../styles/media"
import BackButtonPNG from "../img/backButton.png"
import { navigate } from "gatsby"
import { motion } from "framer-motion"

const BackButtonIMG = styled(motion.img)`
  position: absolute;
  top: 10px;
  left: 10px;
  cursor: pointer;
  ${Down.md`
width: 50px;
top: 5px;
left: 5px;

`};
`

const BackButton = ({ route }) => {
  return (
    <BackButtonIMG
      src={BackButtonPNG}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileTap={{
        scale: 0.95,
      }}
      whileHover={{
        scale: 1.05,
      }}
      onClick={() => {
        navigate(`${route}`)
      }}
    />
  )
}

export default BackButton
