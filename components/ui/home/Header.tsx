"use client";
import React from "react";
import { motion } from "motion/react";

function Header() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1.8, ease: "easeInOut" } }}
    >
      <div className="text-8xl font-extrabold text-wrap leading-none">
        <span className="">SOFTWARE </span>
        <span className="text-[#343334]">ENGINEER</span>
      </div>
      <div className="text-lg w-[550px] text-white/60 ml-4 mt-8">
        Passionate about creating intuitive and engaging user experiences.
        Specialize in transforming ideas into beautifully crafted products.
      </div>
    </motion.div>
  );
}

export default Header;
