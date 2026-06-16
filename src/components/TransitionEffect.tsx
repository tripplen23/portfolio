import React from "react";
import { motion } from "framer-motion";

const TransitionEffect = () => {
  return (
    <motion.div
      className="fixed inset-0 z-50 bg-dark dark:bg-light pointer-events-none"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      exit={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    />
  );
};

export default TransitionEffect;
