import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Github, GlobeLock, LucideIcon } from "lucide-react";
import { Badge } from "./ui/badge";
import Image from "next/image";

type Project = {
  icon: LucideIcon;
  projectName: string;
  liveDemo: string | null;
  githubRepo: string;
  projectFeatures: Array<string>;
  techStack: Array<string>;
};

const ProjectCard = (props: Project) => {
  console.log(props);
  const features = props.projectFeatures;
  return (
    <>
      <div>
        <Card className="h-full flex flex-col">
          <CardHeader className="p-6">
            <CardTitle className="tracking-wider">
              <div className="flex items-center">
                <props.icon className="mr-4" />
                {props.projectName}
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent className="flex-grow px-10 py-6">
            <ul className="list-disc">
              {features.map((item) => {
                return (
                  <>
                    <li className="leading-7 tracking-wide text-lg lg:text-base mb-1">
                      {item}
                    </li>
                  </>
                );
              })}
            </ul>
          </CardContent>
          <CardFooter className="flex flex-col items-start gap-4">
            <div className="flex flex-wrap gap-2">
              {props.techStack.map((e) => {
                return (
                  <Badge
                    className="flex justify-center items-center px-3 font-semibold"
                    variant="secondary"
                  >
                    {e}
                  </Badge>
                );
              })}
            </div>

            <div className="flex gap-2">
              <p>
                <Github />
              </p>
              <p>
                <GlobeLock />
              </p>
            </div>
          </CardFooter>
        </Card>
      </div>
    </>
  );
};

export default ProjectCard;
