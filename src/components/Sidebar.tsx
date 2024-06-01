import React from "react";
import { ModeToggle } from "./ToggleButton";
import { Badge, Link, Twitter } from "lucide-react";
import { badgeVariants } from "./ui/badge";

type Props = {};

const Sidebar = (props: Props) => {
  const a = [1, 2, 3];
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
              <h1 className="font-bold text-3xl">Dhruvin Vaghani</h1>
            </div>

            <div className="description flex flex-col justify-end items-center mt-2 gap-2">
              <p>I am a programmer and web developer from India.</p>
            </div>
          </div>
        </div>
        <div className="contacts flex justify-center mt-8 px-[100px]">
          {a.map(() => {
            return (
              <>
                <div className="bg-red-700 rounded-full flex justify-center items-center w-10 h-10 p-2 mr-4 duration-150 hover:-translate-y-1.5">
                  <Twitter size={20} />
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
