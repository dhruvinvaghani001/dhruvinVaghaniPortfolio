"use client";
import React from "react";
import Link from "next/link";
import socialLinks from "@/lib/socialLinks";
import { Button } from "./ui/button";
import { Mail } from "lucide-react";
import Image from "next/image";
import { profile } from "@/assets/skills";
import { ModeToggle } from "./ToggleButton";

type Props = {};

const Sidebar = (props: Props) => {
  return (
    <>
      <div className=" pt-12 pb-8 lg:py-16 flex items-center flex-col gap-y-4 lg:h-screen">
        <div className="profile flex flex-col items-center justify-center">
          <div className="">
            <Image
              src={profile}
              alt="bg"
              className="rounded-full"
              width={200}
            />
          </div>
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
        <div className="contacts flex justify-center mt-8">
          {socialLinks.map((social) => {
            return (
              <>
                <Link href={social.profileLink} target="_blank">
                  <div className="bg-muted cursor-pointer rounded-full flex justify-center items-center w-12 h-12 p-2  mr-4 duration-200 hover:-translate-y-1.5  hover:text-violet-600">
                    <social.icon className="" />
                  </div>
                </Link>
              </>
            );
          })}
        </div>
        <div className="mt-10">
          <Link href="mailto:dhruvinvaghani0011@gmail.com">
            <Button className="flex gap-2 rounded-full text-background font-bold">
              <Mail />
              Get in Touch
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
