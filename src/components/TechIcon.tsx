import Image from "next/image";
import React from "react";

type Props = {
  name: string;
  icon: string;
};

const TechIcon: React.FC<Props> = (props: Props) => {
  return (
    <>
      <div className="rounded-lg bg-[#1A222E] py-4 px-0 duration-700 shadow-inner shadow-gray-800 text-center hover:shadow-inner hover:shadow-gray-600">
        <div className="flex justify-center mb-2">
          <Image src={props.icon} alt={props.name} width={70} />
        </div>
        <p className="font-bold capitalize">{props.name}</p>
      </div>
    </>
  );
};

export default TechIcon;
