"use client";
import { Briefcase, Folder, Home, NotebookIcon } from "lucide-react";
import React from "react";
import { useRouter } from "next/navigation";
import { motion } from "motion/react";

function NavBar() {
  const router = useRouter();

  return (
    <div className="flex justify-center">
      <motion.div
        initial={{ scale: 0.7 }}
        animate={{
          scale: 1,
          transition: { duration: 1 },
        }}
        className=" px-7 py-3 bg-[#1b1b19] fixed  top-6 rounded-2xl "
      >
        <div className="space-x-12 flex">
          <motion.div
            whileHover={{ scale: 1.3}}
            whileTap={{ scale: 0.9 }}
            className="cursor-pointer"
            onClick={() => {
              router.push("/");
            }}
          >
            <Home />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.9 }}
            className="cursor-pointer"
            onClick={() => {
              router.push("/about");
            }}
          >
            <Folder />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.9 }}
            className="cursor-pointer"
            onClick={() => {
              router.push("/work-experience");
            }}
          >
            <Briefcase />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.9 }}
            className="cursor-pointer"
            onClick={() => {
              router.push("/contact");
            }}
          >
            <NotebookIcon />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default NavBar;
