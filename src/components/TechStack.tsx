import React from "react";
import techs from "@/lib/skills";
import { Card, CardContent, CardHeader } from "./ui/card";
import TechIcon from "./TechIcon";

type Props = {};

const TechStack = (props: Props) => {
  return (
    <>
      {techs.map((item) => (
        <Card key={item.name} className="shadow-inner shadow-gray-800 mb-10 ">
          <CardHeader className="text-xl sm:text-2xl font-bold mb-6 text-center capitalize">
            {item.name}
          </CardHeader>
          <CardContent className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
            {item.techs.map((tech) => (
              <TechIcon icon={tech.icon} name={tech.name} />
            ))}
          </CardContent>
        </Card>
      ))}
    </>
  );
};

export default TechStack;
