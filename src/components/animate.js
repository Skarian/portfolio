import React from "react"
import PropTypes from "prop-types"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const Animate = ({ children, repeat, button }) => {
  const [ref, inView] = useInView({
    triggerOnce: !repeat,
  })
  return (
    <motion.div
      ref={ref}
      animate={{
        scale: inView ? 1 : 0,
      }}
      initial={false}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 20,
        duration: 6,
        ease: "easeout",
      }}
      whileTap={{
        scale: button ? 0.95 : 1,
      }}
      whileHover={{
        scale: button ? 1.05 : 1,
      }}
    >
      {children}
    </motion.div>
  )
}

Animate.propTypes = {
  children: PropTypes.node.isRequired,
  button: PropTypes.bool,
  repeat: PropTypes.bool,
}

Animate.defaultProps = {
  button: false,
  repeat: false,
}

export default Animate
