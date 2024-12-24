"use client";
import { Briefcase, Folder, Home, NotebookIcon } from "lucide-react";
import React from "react";
import { useRouter } from "next/navigation";

function NavBar() {
  const router = useRouter();

  return (
    <div className="flex justify-center">
      <div className=" px-7 py-3 bg-[#1b1b19] fixed  top-6 rounded-2xl ">
        <div className="space-x-12 flex">
          <div
            className="cursor-pointer"
            onClick={() => {
              router.push("/");
            }}
          >
            <Home />
          </div>
          <div
            className="cursor-pointer"
            onClick={() => {
              router.push("/about");
            }}
          >
            <Folder />
          </div>
          <div
            className="cursor-pointer"
            onClick={() => {
              router.push("/work-experience");
            }}
          >
            <Briefcase />
          </div>
          <div
            className="cursor-pointer"
            onClick={() => {
              router.push("/contact");
            }}
          >
            <NotebookIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
