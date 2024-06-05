"use client";

import ContactSection from "@/components/section/ContactSection";
import ProjectSection from "@/components/section/ProjectSection";
import TechSection from "@/components/section/TechSection";
import Sidebar from "@/components/Sidebar";


export default function Home() {
  return (
    <main className="h-screen flex flex-col lg:grid lg:grid-cols-[25%_auto] ">
      <div className="inline-block lg:sticky lg:top-0;">
        <Sidebar />
      </div>
      <div className="lg:overflow-y-auto h-screen py-16 lg:px-0 px-6">
        <div className="lg:container">
          <div className="heading_content lg:text-start text-center gap-y-4 pb-12 border-b-2">
            <h1
              className="font-bold text-4xl lg:text-5xl"
              style={{ lineHeight: "normal" }}
            >
              Hey! I'm Dhruvin Vaghani, Dedicated Developer Building Brilliance
            </h1>
            <p className="font-semibold text-lg mt-6">
              Check out my work below, and get in touch if you'd like to work
              together. 👇
            </p>
          </div>

          {/* project section */}
          <ProjectSection />

          {/* tech stack section */}
          <TechSection />

          {/* contact section */}
          <ContactSection />
        </div>
      </div>
    </main>
  );
}
