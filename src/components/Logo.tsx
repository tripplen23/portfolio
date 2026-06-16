import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className="flex items-center justify-center mt-2">
      <MotionLink
        href="/"
        className="w-11 h-11 bg-dark text-light flex items-center justify-center rounded-md text-base font-bold border border-dark dark:border-light"
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        BN
      </MotionLink>
    </div>
  );
};

export default Logo;
