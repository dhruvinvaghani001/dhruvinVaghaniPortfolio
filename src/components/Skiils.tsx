import React from "react";
import TechStack from "./TechStack";

type Props = {};

const Skiils = (props: Props) => {
  return (
    <div className="mx-auto grid md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-6">
      <TechStack />
    </div>
  );
};

export default Skiils;
