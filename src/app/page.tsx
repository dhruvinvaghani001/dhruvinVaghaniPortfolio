"use client";
import Project from "@/components/Project";
import Sidebar from "@/components/Sidebar";
import Skiils from "@/components/Skiils";
import { projectsData } from "@/lib/project";

export default function Home() {
  return (
    <div className="h-screen flex flex-col md:grid md:grid-cols-[25%_auto] ">
      <div className="md:sticky md:top-0;">
        <Sidebar />
      </div>
      <div className="md:overflow-y-auto h-screen py-16 px-8 md:px-16">
        <div className="md:container">
          <div className="">
            <h1 className="font-bold text-4xl">
              Hey! I'm Dhruvin Vaghani, a passioante devloper who loves build a
              greatest things.
            </h1>
          </div>
          <div className="mt-10">
            <Skiils />
          </div>
          <div className="projects mt-4">
            <h1 className="font-bold text-2xl">Featured Projects</h1>
            <div className="grid grid-cols-2 gap-8 mt-8">
              {projectsData.map((iteam, index) => {
                console.log(iteam.icon);
                return <Project {...iteam} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
