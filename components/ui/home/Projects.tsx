"use client";
import React from "react";
import { motion } from "motion/react";
import sharehub from "@/public/sharehub.png";
import qid from "@/public/qid.png";
import paypal from "@/public/paypal.png";

import Image from "next/image";
import { Github, Link2 } from "lucide-react";
import Link from "next/link";

interface Project {
  image: any;
  name: string;
  description: string;
  githubUrl: string;
  url: string;
}

interface CardProps {
  project: Project;
}

function Projects() {
  const ProjectList = [
    {
      image: sharehub,
      name: "ShareHub.xyz",
      description:
        "ShareHub is a Project where users can create their public viewable profile containing their customizable social links",
      githubUrl: "https://github.com/punyakrit/social-share",
      url: "https://www.sharehub.xyz/",
    },
    {
      image: qid,
      name: "OneQid clone",
      description:
        "A responsive website built with Next.js and Tailwind CSS, offering seamless user experience across devices.",
      githubUrl: "https://github.com/punyakrit/qid-clone",
      url: "https://oneqid-next.vercel.app/",
    },
    {
      image: paypal,
      name: "Paypal clone",
      description: "Responsive website build using Reactjs and TailwindCSS.",
      githubUrl: "https://github.com/punyakrit/paypal-assignment-clone",
      url: "https://paypal-assignment-clone.vercel.app/",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1.8, ease: "easeInOut" } }}
      className="my-32"
    >
      <div className="text-8xl font-extrabold text-wrap leading-none">
        <span className="">RECENT </span>
        <span className="text-[#343334]">PROJECTS</span>
      </div>
      <div className="mt-5">
        {ProjectList.map((project, i) => {
          return (
            <div key={i} className="my-1">
              <Card project={project} />
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}

function Card({ project }: CardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.5 }}
      className="hover:bg-white/5 w-[800px] p-6 rounded-2xl"
    >
      <div className="flex justify-between">
        <div className="flex">
          <Image
            src={project.image}
            alt="sharehub"
            className="w-[260px] h-40 rounded-3xl"
          />
          <div className="flex flex-col justify-center px-6">
            <div className="font-semibold text-2xl">{project.name}</div>
            <div className="text-white/70 pt-3">{project.description}</div>
          </div>
        </div>
        <div className="flex flex-col justify-center space-y-8">
          <motion.div
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <Link href={project.githubUrl} target="_blank">
              <Github />
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <Link href={project.url} target="_blank">
              <Link2 />
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default Projects;
