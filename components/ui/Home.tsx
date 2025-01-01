import React from "react";
import ProfleCard from "../ProfleCard";
import SectionHandler from "./home/SectionHandler";

function Home() {
  return (
    <div className="flex h-screen">
      <div className="w-2/5 ">
        <ProfleCard />
      </div>
      <div className="ml-14 pt-44 w-3/5 overflow-y-scroll ">
        <SectionHandler/>
      </div>
    </div>
  );
}

export default Home;
