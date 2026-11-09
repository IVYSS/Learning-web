"use client";

import { Navbar } from "@/src/components/Navbar/Navbar";

export default function Home() {
  return (
    <main className=" bg-black text-white ">
      <div className="justify-center items-center text-center w-full font-nunito bg-green-6 text-[16px] text-black p-3 sticky top-0 z-50">
        GSAP is now free for everyone, thanks to Web flow's support!
      </div>
      <Navbar />
      <div className="px-10"></div>
    </main>
  );
}
