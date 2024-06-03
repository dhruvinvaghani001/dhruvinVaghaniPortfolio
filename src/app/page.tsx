"use client";
import ProjectCard from "@/components/ProjectCard";
import Project from "@/components/Projects";
import Sidebar from "@/components/Sidebar";
import Skiils from "@/components/Skiils";
import { ModeToggle } from "@/components/ToggleButton";
import { projectsData } from "@/lib/project";

export default function Home() {
  return (
    <div className="h-screen flex flex-col lg:grid lg:grid-cols-[25%_auto] ">
      <div className="lg:sticky lg:top-0;">
        <Sidebar />
      </div>
      <div className="lg:overflow-y-auto h-screen py-16 px-8 lg:px-0">
        <div className="lg:container">
          <div className="">
            <h1 className="font-bold text-4xl text-start">
              Hey! I'm Dhruvin Vaghani, a passioante devloper who loves build a
              greatest things.
            </h1>
          </div>

          <div className="projects mt-4 " id="projects">
            <h1 className="font-bold text-2xl">Featured Projects</h1>
            <div className="grid  md:grid-cols-2 gap-6 mt-8 lg:grid-cols-1 xl:grid-cols-2">
              {projectsData.map((iteam, index) => {
                console.log(iteam.icon);
                return <ProjectCard {...iteam} />;
              })}
            </div>
          </div>
          <div className="mt-10">
            <Skiils />
          </div>
          <div className="contact" id="contact"></div>
        </div>
      </div>
    </div>
  );
}
