import socialLinks from "@/lib/socialLinks";
import Link from "next/link";

import React from "react";

type Props = {};

const ContactSection = (props: Props) => {
  return (
    <div>
      <div className="heading mb-10 pb-10">
        <h2 className="text-center md:text-start font-bold text-2xl md:text-3xl tracking-wide">
          Contact
        </h2>
        <p className="mt-6 text-lg">
          I am eagerly searching for fresh opportunities to level up my skills
          and would love to collaborate on a project with you. Feel free to
          Email me or connect on social media anytime-let’s have a chat! 👇
        </p>
        <div className="contacts flex justify-start mt-8">
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
    </div>
  );
};

export default ContactSection;
