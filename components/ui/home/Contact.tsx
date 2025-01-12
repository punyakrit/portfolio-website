"use client";
import React from "react";
import { motion } from "motion/react";
import { Label } from "../label";
import { Input } from "../input";
import { Textarea } from "../textarea";
import { Button } from "../button";

function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1.8, ease: "easeInOut" } }}
      className="mt-10"
    >
      <div className="text-8xl font-extrabold text-wrap leading-none w-3/4 mt-10">
        <span className="">LET'S WORK </span>
        <span className="text-[#343334]">TOGETHER</span>
      </div>
      <div className="py-14 max-w-screen-sm">
        <div className="flex space-x-5">
          <div className="w-1/2">
            <Label className="text-xs text-[#9f9d9f]">Name</Label>
            <Input
              className="rounded-xl bg-[#343334] text-white border-none mt-1 placeholder:text-white/60"
              placeholder="Your Name"
            ></Input>
          </div>
          <div className="w-1/2">
            <Label className="text-xs text-[#9f9d9f]">Email</Label>
            <Input
              className="rounded-xl bg-[#343334] text-white border-none mt-1 placeholder:text-white/60"
              placeholder="Email@gmail.com"
            ></Input>
          </div>
        </div>
        <div className="mt-3">
          <Label className="text-xs text-[#9f9d9f]">Message</Label>
          <Textarea
            className="rounded-xl bg-[#343334] text-white border-none mt-1 placeholder:text-white/60"
            placeholder="Your message here...."
          ></Textarea>
        </div>
        <div className="py-5">
          <Button className="bg-orange-600 w-full rounded-xl font-semibold transition duration-500 hover:bg-white hover:text-black ">
            Submit
          </Button>
        </div>
      </div>
    </motion.div>
  );
}

export default Contact;
