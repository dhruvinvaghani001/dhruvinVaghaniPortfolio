import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
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

const Project = (props: Project) => {
  console.log(props.icon);
  return (
    <div>
      <Card className="h-full flex flex-col">
        <CardHeader className="">
          <CardTitle>{props.projectName}</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow">
          <ul className="list-disc">
            {props.projectFeatures.map((item) => {
              return (
                <>
                  <li className="">{item}</li>
                </>
              );
            })}
          </ul>
        </CardContent>
        <CardFooter className="">
          <div className="flex flex-wrap gap-2">
            {props.techStack.map((e) => {
              return (
                <Badge className="flex justify-center items-center">{e}</Badge>
              );
            })}
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Project;
