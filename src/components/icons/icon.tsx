import { FC, SVGProps } from "react";

import { IconProps } from "./interface";

import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaOpenid } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";
import { TfiLocationPin } from "react-icons/tfi";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaSignal } from "react-icons/fa";
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
export const TfiLocationPinIcon = Svg(TfiLocationPin);
export const FaInstagramIcon = Svg(FaInstagram);
export const FaYoutubeIcon = Svg(FaYoutube);
export const FaTwitterIcon = Svg(FaTwitter);
export const FaTiktokIcon = Svg(FaTiktok);
export const FaXIcon = Svg(FaXTwitter);
export const FaSignalIcon = Svg(FaSignal);
export const FaArrowTrendUpIcon = Svg(FaArrowTrendUp);
