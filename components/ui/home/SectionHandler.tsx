import React from "react";
import Header from "./Header";
import Projects from "./Projects";
import WorkExperience from "./WorkExperience";

function SectionHandler() {
  return (
    <div className="mr-10">
      <Header />
      <Projects/>
      <WorkExperience/>
      
    </div>
  );
}

export default SectionHandler;
