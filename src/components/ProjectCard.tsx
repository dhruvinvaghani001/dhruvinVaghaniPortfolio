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

type Project = {
  icon: LucideIcon;
  projectName: string;
  liveDemo: string | null;
  githubRepo: string;
  projectFeatures: Array<string>;
  techStack: Array<string>;
};

const ProjectCard = (props: Project) => {
  const features = props.projectFeatures;
  return (
    <>
      <div>
        <Card className="h-full flex flex-col">
          <CardHeader className="p-6">
            <CardTitle>{props.projectName}</CardTitle>
          </CardHeader>
          <CardContent className="flex-grow px-10 py-6">
            <ul className="list-disc text-white">
              {features.map((item) => {
                return (
                  <>
                    <li className="leading-7">{item}</li>
                  </>
                );
              })}
            </ul>
          </CardContent>
          <CardFooter className="flex flex-col items-start gap-4">
            <div className="flex flex-wrap gap-2">
              {props.techStack.map((e) => {
                return (
                  <Badge className="flex justify-center items-center">
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
