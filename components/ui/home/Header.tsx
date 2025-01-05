"use client";
import React from "react";
import { motion } from "motion/react";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

function Header() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1.8, ease: "easeInOut" } }}
    >
      <div className="text-8xl font-extrabold text-wrap leading-none w-3/4">
        <span className="">SOFTWARE </span>
        <span className="text-[#343334]">ENGINEER</span>
      </div>
      <div className="text-lg w-[550px] text-white/60 ml-4 mt-8">
        Passionate about creating intuitive and engaging user experiences.
        Specialize in transforming ideas into beautifully crafted products.
      </div>
      <motion.div
        whileHover={{ scale: 1.2, rotate: 5 }}
        className="bg-orange-500  mt-6 ml-6 font-semibold w-max px-7 text-xl rounded-3xl py-5 cursor-pointer"
      >
        <Link
          href="https://drive.google.com/file/d/1a4TUVgR9vlP52j6KqaMEHeu0OERml7Lp/view?usp=sharing"
          target="_blank"
          className="flex items-center"
        >
          Download Resume <ArrowRightIcon />
        </Link>
      </motion.div>
    </motion.div>
  );
}

export default Header;
