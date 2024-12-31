import { LinkTypes, SoshialsType } from "../types";
import { FaTwitterSquare } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
export const links: LinkTypes[] = [
  { id: 1, url: "/", text: "خانه" },
  { id: 2, url: "/about", text: "درباره ما" },
  { id: 3, url: "/connection", text: "ارتباط با ما" },
  { id: 4, url: "/project", text: "پروژه ها" },
  { id: 5, url: "/", text: "تالار گفتمان" },
  { id: 6, url: "/", text: "ارزیابی" },
  { id: 7, url: "/", text: "نماوا" },
  { id: 8, url: "/", text: "پویش فرانت" },
  { id: 9, url: "/", text: "جوایز" },
];

export const socials: SoshialsType[] = [
  { id: 1, url: "https://twitter.com", icons: <FaTwitterSquare /> },
  { id: 2, url: "https://twitter.com", icons: <IoLogoLinkedin /> },
  { id: 3, url: "https://twitter.com", icons: <FaGithub /> },
];
