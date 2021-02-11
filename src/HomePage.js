import React from "react";
import Slideshow from "./Slideshow";
import { motion } from "framer-motion";
import { valuesIn } from "lodash";

const variants = {
  initial: { opacity: 0, x: -100 },
  animate: { opacity: 1, x: 0 },
  exit: {
    opacity: 0,
    x: -100,
  },
};
const hVariants = {
  initial: { opacity: 0, x: -100 },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.5,
    },
  },
  exit: { opacity: 0, x: -100 },
};

const HomePage = () => {
  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <motion.h2 variants={hVariants}>Homepage</motion.h2>
      <Slideshow />
    </motion.div>
  );
};

export default HomePage;
