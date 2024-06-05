import { projectsData } from "@/lib/project";
import React from "react";
import ProjectCard from "../ProjectCard";

type Props = {};

const ProjectSection = (props: Props) => {
  return (
    <div className="projects mt-16" id="projects">
      <h2 className="font-bold text-2xl md:text-3xl tracking-wide">
        Featured Projects I`ve Build
      </h2>
      <div className="grid  md:grid-cols-2 gap-8 mt-8 lg:grid-cols-1 xl:grid-cols-2">
        {projectsData?.map((iteam, index) => {
          console.log(typeof iteam.icon);
          return <ProjectCard {...iteam} />;
        })}
      </div>
    </div>
  );
};

export default ProjectSection;
