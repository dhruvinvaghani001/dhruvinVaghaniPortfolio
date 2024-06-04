import React from "react";
import TechStack from "../TechStack";

type Props = {};

const TechSection = (props: Props) => {
  return (
    <>
      <div className="mt-24">
        <h2 className="font-bold text-2xl lg:text-3xl mb-8">
          Tools & Technology i know
        </h2>
        <div className="mx-auto grid md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2  md:gap-8 md:gap-y-0">
          <TechStack />
        </div>
      </div>
    </>
  );
};

export default TechSection;
