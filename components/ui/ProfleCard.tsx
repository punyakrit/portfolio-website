import Image from "next/image";
import React from "react";
import image from "@/public/image.jpeg";
import { Github, Linkedin, Mail, X } from "lucide-react";

function ProfleCard() {
  return (
    <div className=" h-screen flex justify-end items-center">
      <div className="w-2/3 h-2/3 bg-white rounded-3xl p-8 flex flex-col justify-between items-center">
        <div className="">
          <Image alt="image" src={image} className="rounded-3xl " />
          <div className="text-black mt-4 font-bold text-3xl">
            Punyakrit Singh Makhni
          </div>
        </div>
        <div>
          <div className="text-black/70 text-xl text-center">
            A Software Engineer who has developed countless innovative
            solutions.
          </div>
          <div>
            <div className="text-orange-500 flex justify-center space-x-8 mt-6">
              <Github />
              <Linkedin />
              <Mail />
              <X />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfleCard;
