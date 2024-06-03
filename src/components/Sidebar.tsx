import React from "react";
import { Badge } from "lucide-react";
import Link from "next/link";
import socialLinks from "@/lib/socialLinks";
import Image from "next/image";

type Props = {};

const Sidebar = (props: Props) => {
  return (
    <>
      <div className="px-4 py-16 flex flex-col justify-center">
        <div className="profile flex flex-col items-center justify-center">
          <div
            className="w-[200px] h-[200px] rounded-full "
            style={{ backgroundColor: "#9473ED" }}
          ></div>
          <div className="flex flex-col items-center justify-center mt-3    ">
            <div>
              <h1 className="font-bold text-3xl text-center">
                Dhruvin Vaghani
              </h1>
            </div>

            <div className="description flex flex-col justify-end items-center mt-2 gap-2 text-center">
              <p>I am a programmer and web developer from India.</p>
            </div>
          </div>
        </div>
        <div className="contacts flex justify-center mt-8 px-[100px]">
          {socialLinks.map((social) => {
            return (
              <>
                <Link href={social.profileLink} target="_blank">
                  <div className="bg-[#1A222E] cursor-pointer rounded-full flex justify-center items-center w-12 h-12 p-2  mr-4 duration-200 hover:-translate-y-1.5  hover:text-violet-600">
                    <social.icon className="" />
                  </div>
                </Link>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
