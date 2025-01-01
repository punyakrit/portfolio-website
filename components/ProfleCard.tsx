"use client";
import Image from "next/image";
import React from "react";
import image from "@/public/image.jpeg";
import { Github, Linkedin, Mail, X } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
function ProfleCard() {
  return (
    <div className=" h-screen flex justify-end items-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1, ease: "easeInOut" } }}
        className="w-2/3 h-2/3 bg-white rounded-3xl p-8 flex flex-col justify-between items-center"
      >
        <div className="">
          <Image alt="image" src={image} className="rounded-3xl " />
          <div className="text-black text-center mt-4 font-bold text-3xl">
            Punyakrit Singh Makhni
          </div>
        </div>
        <div>
          <div className="text-black/70 text-xl text-center">
            A Software Engineer who has developed countless innovative
            solutions.
          </div>
          <div>
            <div className="text-orange-500 flex justify-center space-x-8 mt-6 ">
              <Link href="https://github.com/punyakrit" target="_blank">
                <Github />
              </Link>
              <Link
                href="https://www.linkedin.com/in/punyakrit-singh-makhni/"
                target="_blank"
              >
                <Linkedin />
              </Link>
              <Link
                href="mailto:punyakritsinghmakhni@gmail.com"
                target="_blank"
              >
                <Mail />
              </Link>
              <Link href="https://x.com/Punyakrit22" target="_blank">
                <X />
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default ProfleCard;
