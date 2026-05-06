import { FC, SVGProps } from "react";

import { IconProps } from "./interface";

import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaOpenid } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaSignal } from "react-icons/fa6";
import { FaArrowTrendUp } from "react-icons/fa6";

const Svg = (
  SvgComponent: FC<SVGProps<SVGSVGElement>>,
): React.FC<IconProps> => {
  return function Icon({
    height = "24",
    width = "24",
    className = "",
  }: IconProps) {
    const svgProps = {
      height,
      width,
      className,
    };
    return <SvgComponent {...svgProps} />;
  };
};

export const FcGoogleIcon = Svg(FcGoogle);
export const FaFacebookIcon = Svg(FaFacebook);
export const FaLinkedinIcon = Svg(FaLinkedin);
export const FaGithubIcon = Svg(FaGithub);
export const FaOpenidIcon = Svg(FaOpenid);
export const ArrowRoundForwardIcon = Svg(IoIosArrowRoundForward);
export const FaSignalIcon = Svg(FaSignal);
export const FaArrowTrendUpIcon = Svg(FaArrowTrendUp);
