import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const Modal = ({ isToggled, setIsToggled, children }) => {
  return (
    <AnimatePresence>
      {isToggled && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            position: "fixed",
            top: "30px",
            left: "50%",
            transform: "translate3d(-50%, 0, 0)",
          }}
        >
          <motion.div initial={{ y: 50 }} animate={{ y: 0 }}>
            <button onClick={() => setIsToggled(false)}>Close</button>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
