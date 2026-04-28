import { socialButtonType } from "@/app/login/interface";
import {
  FaFacebookIcon,
  FaGithubIcon,
  FaLinkedinIcon,
} from "../components/icons/icon";
import { FaOpenid } from "react-icons/fa";

export const mockTabHome: string[] = [
  "DSA",
  "Practice Problems",
  "C",
  "C++",
  "Java",
  "Python",
  "Javascript",
  "Data Science",
  "Machine Learning",
  "Courses",
];

export const mockIconButton: Array<socialButtonType> = [
  {
    alt: "Facebook",
    src: "",
    icon: <FaFacebookIcon className="w-[24px] h-[24px] text-blue-2" />,
  },
  {
    alt: "linkIn",
    src: "linkIn",
    icon: <FaLinkedinIcon className="w-[24px] h-[24px] text-blue-3" />,
  },
  {
    alt: "Github",
    src: "Github",
    icon: <FaGithubIcon className="w-[24px] h-[24px]" />,
  },
  {
    alt: "OpenPass",
    src: "OpenPass",
    icon: <FaOpenid className="w-[24px] h-[24px] text-blue-3" />,
  },
];

export const buttonDataMock = [
  {
    name: "DSA Online",
    src: "",
  },
  {
    name: "DS, ML & AI",
    src: "",
  },
  {
    name: "LLD & HLD",
    src: "",
  },
];

export const cardDataMock = [
  {
    headerText: "Data Structure and Algorithms",
  },
  {
    headerText: "Web Development",
    firstColor: "#a85c5c",
    secondColor: "#e89c9c",
  },
  {
    headerText: "AI ML & Data Science",
    firstColor: "#a85c5c",
    secondColor: "#e89c9c",
  },
  {
    headerText: "Machine Learning",
    firstColor: "#a85c5c",
    secondColor: "#e89c9c",
  },
  {
    headerText: "Python",
    firstColor: "#a85c5c",
    secondColor: "#e89c9c",
  },
  {
    headerText: "Java",
    firstColor: "#a85c5c",
    secondColor: "#e89c9c",
  },
  {
    headerText: "System Design",
    firstColor: "#a85c5c",
    secondColor: "#e89c9c",
  },
  {
    headerText: "DevOps",
    firstColor: "#a85c5c",
    secondColor: "#e89c9c",
  },
  {
    headerText: "Programming Languages",
    firstColor: "#a85c5c",
    secondColor: "#e89c9c",
  },
  {
    headerText: "CS Subject",
    firstColor: "#a85c5c",
    secondColor: "#e89c9c",
  },
  {
    headerText: "Practice DSA",
    firstColor: "#a85c5c",
    secondColor: "#e89c9c",
  },
  {
    headerText: "interview Preparation",
    firstColor: "#a85c5c",
    secondColor: "#e89c9c",
  },
  {
    headerText: "Databases",
    firstColor: "#a85c5c",
    secondColor: "#e89c9c",
  },
  {
    headerText: "Software & Tools",
    firstColor: "#a85c5c",
    secondColor: "#e89c9c",
  },
];

export const exploreDataMock = [
  "Trending Now",
  "Watch Videos",
  "GfG Coding Contest",
  "Advertise with Us",
];
