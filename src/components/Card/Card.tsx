import { ArrowRoundForwardIcon } from "../icons/icon";
import { CardInterface } from "./interface";
import cn from "classnames";

export default function Card({
  className,
  classNameButton,
  description,
  headerText,
  textButton = "View more",
  buttonIcon = <ArrowRoundForwardIcon width="24" height="24" />,
}: CardInterface) {
  return (
    <div
      className={cn(
        " group rounded-xl px-[15px] w-[500px] h-[200px] flex flex-col justify-center items-center  font-nunito  cursor-pointer bg-amber-300",
        "group-last-of-type:hover:bg-white",
        className,
      )}
    >
      <p className="text-3xl font-bold text-white mb-6">{headerText}</p>
      <p>{description}</p>
      {textButton && (
        <button
          className={cn(
            "border border-white flex text-white justify-center align-center rounded-3xl w-[140px] h-[42px] pt-[6px] text-[20px] gap-[6px] cursor-pointer",
            "group-hover:bg-white group-hover:text-green-2 group-hover:border-green-2 group-hover:delay-100 group-hover:duration-300",
            classNameButton,
          )}
        >
          <span> {textButton}</span>
          <span className="pt-[6px]">{buttonIcon}</span>
        </button>
      )}
    </div>
  );
}
