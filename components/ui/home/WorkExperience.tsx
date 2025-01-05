"use client"
import React from 'react'
import { motion } from "motion/react";

function WorkExperience() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1.8, ease: "easeInOut" } }}
    >
      <div className="text-8xl font-extrabold text-wrap leading-none w-3/4">
        <span className="">Work </span>
        <span className="text-[#343334]">Experience</span>
      </div>
      
    </motion.div>
  )
}

export default WorkExperience
