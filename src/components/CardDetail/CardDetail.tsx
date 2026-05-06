// import Image from "next/image";
import { FaArrowTrendUpIcon, FaSignalIcon } from "../icons/icon";
import cn from "classnames";

export default function CardDetail() {
  return (
    <div className="w-[290px] bg-white border rounded-2xl border-black-5 group hover:shadow-xl">
      <div className="w-full relative">
        {/* <Image alt="test" src={"/"} width={290} height={160} about="" /> */}
        <div className="w-full h-[160px]"></div>
        <div className="px-[10px] pt-[25px] pb-[12px] text-black-5">
          <div className="text-[20px] my-[24px]">
            Fast-Track Hiring Opportunity Program - Exclusive for 2026 Graduates
          </div>
          <div className="text-[14px] mb-[32px] flex gap-[8px]">
            <span className="rounded-2xl bg-white-5 w-[20px] h-[20px] flex justify-center items-center">
              <FaSignalIcon className="w-[12px] h-[12px] text-gray-2" />
            </span>
            Beginner to Advanced
          </div>
          <div className="flex justify-between text-[12px]">
            <div className=" flex gap-[10px]">
              <FaArrowTrendUpIcon className="w-[14px] h-[14px] text-green" />
              2K+ interested Geeks
            </div>
            <button
              className={cn(
                "text-[14px] ",
                "group-hover:text-green-2 group:delay-500 group:duration-700 group:hover:bg-green group:hover:w-[200px]",
              )}
            >
              Explore now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
