import React from "react";
import ProfleCard from "../ProfleCard";
import SectionHandler from "./home/SectionHandler";
import Footer from "../Footer";

function Home() {
  return (
    <div>
      <div className="flex h-screen">
        <div className="w-2/5 sticky">
          <ProfleCard />
        </div>
        <div className="ml-14 pt-44 w-3/5 overflow-y-scroll ">
          <SectionHandler />
        </div>
      </div>
    </div>
  );
}

export default Home;
