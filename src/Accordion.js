import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const variants = {
  open: {
    opacity: 1,
    height: "auto",
  },
  closed: {
    opacity: 0,
    height: 0,
  },
};

const Accordion = () => {
  const [isToggled, setIsToggled] = useState(false);
  return (
    <article>
      <h2 role="button" onClick={() => setIsToggled(!isToggled)}>
        Heading
      </h2>
      <AnimatePresence>
        {isToggled && (
          <motion.div
            variants={variants}
            initial="closed"
            animate="open"
            exit="closed"
            style={{ overflow: "hidden" }}
          >
            <p>
              That's what painting is all about. It should make you feel good
              when you paint. And maybe a little bush lives there. With
              something so strong, a little bit can go a long way. Little trees
              and bushes grow however makes them happy. Think about a cloud.
              Just float around and be there. Let's make some happy little
              clouds in our world.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  );
};

export default Accordion;
