import Image from "next/image";
import React from "react";
import techs from "@/lib/skills";
import { Card, CardContent, CardHeader } from "./ui/card";
import { typescript } from "@/assets/skills";
import TechIcon from "./ui/TechIcon";
import TechStack from "./TechStack";

type Props = {};

const Skiils = (props: Props) => {
  return (
    <div className="mx-auto grid md:grid-cols-2 gap-6">
      <TechStack />
    </div>
  );
};

export default Skiils;
