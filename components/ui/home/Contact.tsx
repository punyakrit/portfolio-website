"use client"
import React from 'react'
import { motion } from "motion/react";

function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1.8, ease: "easeInOut" } }}
      className='mt-10'
    >
      <div className="text-8xl font-extrabold text-wrap leading-none w-3/4 mt-10">
        <span className="">LET'S WORK </span>
        <span className="text-[#343334]">TOGETHER</span>
      </div>
      <div>
        
      </div>
      
    </motion.div>
  )
}

export default Contact
