import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
// import { wrap } from "@popmotion/popcorn";

const COLORS = [
  "var(--red)",
  "var(--blue)",
  "var(--black)",
  "var(--purp)",
  "var(--green)",
];

const variants = {
  enter: (direction) => ({
    x: direction < 0 ? 100 : -100,
    opacity: 0.5,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction < 0 ? -100 : 100,
    opacity: 0,
  }),
};

const Slideshow = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (direction) => {
    setPage([page + direction, direction]);
  };

  const index = page;
  return (
    <div style={{ position: "relative", height: 400 }}>
      <AnimatePresence custom={direction}>
        <motion.div
          custom={direction}
          key={page}
          custom={direction}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          variants={variants}
          initial="enter"
          animate="center"
          style={{ overflow: "visible" }}
          exit="exit"
          onDragEnd={(e, { offset, velocity }) => {
            if (offset.x > 400) {
              paginate(1);
            }
            if (offset.x < -400) {
              paginate(-1);
            }
          }}
          style={{
            height: 400,
            width: "100%",
            overflow: "visible",
            background: COLORS[index],
            position: "absolute",
            left: 0,
            top: 0,
          }}
        />
      </AnimatePresence>
      <div style={{ zIndex: 10, position: "absolute" }}>
        <button onClick={() => paginate(-1)}>{"<"}</button>
        <button onClick={() => paginate(1)}>{">"}</button>
      </div>
    </div>
  );
};

export default Slideshow;
