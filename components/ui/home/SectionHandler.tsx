import React from "react";
import Header from "./Header";
import Projects from "./Projects";
import WorkExperience from "./WorkExperience";
import Contact from "./Contact";

function SectionHandler() {
  return (
    <div className="mr-10">
      <Header />
      <Projects/>
      <WorkExperience/>
      <Contact/>
    </div>
  );
}

export default SectionHandler;
