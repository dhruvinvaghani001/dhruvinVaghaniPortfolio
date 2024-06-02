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
          {/* <props.icon className="text-card-foreground" width={22} /> */}
          <CardTitle>{props.projectName}</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow">
          <ul className="list-disc text-white">
            {props.projectFeatures.map((item) => {
              return (
                <>
                  <li>{item}</li>
                </>
              );
            })}
          </ul>
        </CardContent>
        <CardFooter className="flex flex-col items-start justify-center gap-2">
          <div className="flex flex-wrap gap-2">
            {props.techStack.map((e) => {
              return (
                <Badge className="flex justify-center items-center">{e}</Badge>
              );
            })}
          </div>
          <div>
            <p>Github Link</p>
            <p>Code</p>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Project;
