import Image from "next/image";
import React from "react";

type Props = {
  name: string;
  icon: string;
};

const TechIcon: React.FC<Props> = (props: Props) => {
  return (
    <>
      <div className="rounded-lg bg-[#1A222E] p-4 duration-700 shadow-inner shadow-gray-600 text-center w-full hover:shadow-inner hover:shadow-gray-400">
        <div className="flex justify-center mb-2">
          <Image src={props.icon} alt={props.name} width={60} />
        </div>
        <p className="font-bold capitalize">{props.name}</p>
      </div>
    </>
  );
};

export default TechIcon;
