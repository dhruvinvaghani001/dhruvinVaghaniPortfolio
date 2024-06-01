import Project from "@/components/Project";
import Sidebar from "@/components/Sidebar";
import { ModeToggle } from "@/components/ToggleButton";

export default function Home() {
  return (
    <div className="h-screen flex flex-col-reverse md:grid md:grid-cols-[25%_auto] gap-20 ">
      <div className="md:sticky md:top-0;">
        <Sidebar />
      </div>
      <div className="md:overflow-y-auto md:h-screen py-16 pr-[110px]">
        <div className="">
          <h1 className="font-bold text-4xl">
            Hey! I'm Dhruvin Vaghani, a proud devloper who loves build a great
            things.
          </h1>
        </div>
        <div className="projects mt-4">
          <h1 className="font-bold text-3xl">Featured Projects</h1>
          <div className="grid grid-cols-2">
            <Project id="1" />
            <Project id="2" />
          </div>
        </div>
      </div>
    </div>
  );
}
