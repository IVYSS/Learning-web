"use client";

import Image from "next/image";
import Link from "next/link";
import { NavbarInterface } from "./interface";

export function Navbar({ tabs = [] }: NavbarInterface) {
  return (
    <div>
      <div className="sticky flex justify-center text-center items-center px-6  w-full  h-12.5 border-b border-white-3 bg-white">
        <div className="h-full items-center justify-center object-center flex gap-6">
          {/* <Image
            width={50}
            height={50}
            src={"https://media.geeksforgeeks.org/gfg-gg-logo.svg"}
            alt="logo"
          /> */}

          {/* <input
            className="w-62 border rounded-3xl border-green-2 h-9.25 p-2.5"
            placeholder="Search.."
          /> */}
        </div>
        <div className="flex flex-2 gap-10 pl-50">
          <div>
            <p>Courses</p>
          </div>
          <div>
            <p>Tutorials</p>
          </div>
          <div>
            <p>Interview Prep</p>
          </div>
        </div>
        <div className="flex-end flex gap-3 h-full  text-center justify-center items-center ">
          <div className="rounded-4xl bg-white-3 w-9 h-9 p-2 text-black">i</div>
          <div className="bg-black text-white rounded-md h-9.25 w-18.25  p-2 text-[14px]">
            <Link href={"/login"}>Sign In</Link>
          </div>
        </div>
      </div>
      <div className="flex text-center justify-center text-[11px]">
        {tabs.map((tab, id) => (
          <Link
            href={"/login"}
            className="bg-white p-[10px] mr-[15px] hover:text-green"
            key={id}
          >
            <p>{tab}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
