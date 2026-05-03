"use client";

import {
  buttonDataMock,
  cardDataMock,
  exploreDataMock,
} from "@/src/api/mockDataHomepage";
import Card from "@/src/components/Card/Card";
import { ArrowRoundForwardIcon } from "@/src/components/icons/icon";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [search, setSearch] = useState("");

  return (
    <div className=" bg-linear-to-t from-white to-green-4">
      <main>
        <div className=" px-6 gap-6  flex flex-col  items-center w-260.5 mx-auto py-6 ">
          <div className="text-[40px] justify-center items-center text-center w-full font-bold font-nunito py-7">
            Hello, What Do You Want To Learn?
          </div>

          {/* <input
            placeholder="Geeksforgeeks"
            className="w-[776px] h-[66px] border rounded-xl p-2.5 border-black-5"
            type="text"
            value={search}
            onChange={(e) => {
              e.preventDefault();
              setSearch(e.target.value);
              console.log(e.target.value);
            }}
          /> */}

          <div className="flex gap-[14px]  font-thin text-sm">
            {buttonDataMock.map((button, key) => (
              <Link
                key={key}
                href={button.src}
                className="px-[8px] h-8 flex justify-center align-center rounded-sm border border-black-5 first:bg-green-2 first:text-white-4 pt-1 "
              >
                {button.name}
              </Link>
            ))}
          </div>

          <div className="w-full mt-7">
            <p className="text-[24px] font-nunito font-bold mb-5">Explore</p>

            <div className="grid grid-cols-2 gap-10.5">
              {cardDataMock.map((cardData, key) => (
                <Card headerText={cardData.headerText} key={key} />
              ))}
            </div>
          </div>

          <Link
            href="/"
            className="w-full flex px-7.5 py-2.5 mx-50  font-nunito text-white content-between rounded-xl justify-between h-[105px] items-center bg-purple mt-[54px] mb-[42px]"
          >
            <p className="font-bold text-[32px]">
              Interested in advertising with us?
            </p>
            <div className=" bg-white text-black text-[18px] font-thin py-[10px] px-[32px] rounded-sm flex justify-center items-center ">
              Get in touch
            </div>
          </Link>

          <div className="w-full">
            <p className="text-[24px] font-nunito font-bold">Courses</p>
          </div>

          <div className="w-full">
            <p className="text-[24px] font-nunito font-bold ">Must Explore</p>
            <div className="grid grid-cols-4 gap-10 my-[18px]">
              {exploreDataMock.map((title) => (
                <div
                  className="box grid-1 h-[104px] text-white rounded-xl bg-blue-2 font-bold text-[18px] px-[18px] py-[11px] justify-center"
                  key={title}
                >
                  {title}
                  <div className="flex  flex-col items-end justify-end w-full">
                    <ArrowRoundForwardIcon />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
