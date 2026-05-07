import { FaArrowTrendUpIcon, FaSignalIcon } from "../icons/icon";
import cn from "classnames";
import { CardDetailInterface } from "./interface";
import { formatNumber } from "../unity";

export default function CardDetail({
  image = "",
  rate,
  title,
  buttonTitle,
  className,
  interestNumber = 0,
  levelDetail,
}: CardDetailInterface) {
  return (
    <div
      className={cn(
        "w-[290px] bg-white border rounded-2xl border-black-5 group hover:shadow-xl",
        className,
      )}
    >
      <div className="w-full relative">
        {/* TODO: bring API or image  put in image */}
        {/* <Image alt="test" src={"/"} width={290} height={160} about="" /> */}
        <div className="w-full h-[160px]">{rate}</div>
        <div className="px-[10px] pt-[25px] pb-[12px] text-black-5">
          <div className="text-[20px] my-[24px] break-all text-wrap line-clamp-3">
            {title}
          </div>
          <div className="text-[14px] mb-[32px] flex gap-[8px]">
            <span className="rounded-2xl bg-white-5 w-[20px] h-[20px] flex justify-center items-center">
              <FaSignalIcon className="w-[12px] h-[12px] text-gray-2" />
            </span>
            {levelDetail}
          </div>
          <div className="flex justify-between text-[12px]">
            <div className=" flex gap-[10px]">
              <FaArrowTrendUpIcon className="w-[14px] h-[14px] text-green" />
              {formatNumber(interestNumber, { decimals: 0 })} interested Geeks
            </div>
            <button
              className={cn(
                "text-[14px] ",
                "group-hover:text-green-2 group:delay-500 group:duration-700 group:hover:bg-green group:hover:w-[200px]",
              )}
            >
              {buttonTitle ?? "Explore now"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
