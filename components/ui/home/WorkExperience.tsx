"use client";
import React from "react";
import { motion } from "motion/react";
import { MoveUpRight } from "lucide-react";
import Link from "next/link";

interface jobsType {
  company: String;
  description: String;
  Time: String;
  URL: any;
}

interface JobType {
  data: jobsType;
}

function WorkExperience() {
  const jobData = [
    {
      company: "Agentprod",
      description:
        "Developed core Application and improfance using NextJs Framework and deployed the application on AWS server.",
      Time: "June 2024 - Present",
      URL: "https://agentprod.com/",
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1.8, ease: "easeInOut" } }}
    >
      <div className="text-8xl font-extrabold text-wrap leading-none w-3/4">
        <span className="">Work </span>
        <span className="text-[#343334]">Experience</span>
      </div>
      <div className="my-10">
        {jobData.map((jobData, i) => {
          return (
            <div className="my-4 mt-" key={i}>
              <JobCard data={jobData} />
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}

function JobCard({ data }: JobType) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className="hover:bg-white/5 p-4 rounded-3xl transition duration-500 "
    >
      <div className="flex">
        <div className="space-y-3">
          <div className="font-bold text-3xl">{data.company}</div>
          <div className="text-white/50">{data.description}</div>
          <div className="text-white/50">{data.Time}</div>
        </div>
        <motion.div
          whileHover={{ scale: 1.35, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className=""
        >
          <Link href={data.URL} target="_blank">
            <MoveUpRight />
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default WorkExperience;
