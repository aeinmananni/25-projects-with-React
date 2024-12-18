import { LinkTypes, SoshialsType } from "../types";
import { FaTwitterSquare } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
export const links: LinkTypes[] = [
  { id: 1, url: "/", text: "خانه" },
  { id: 1, url: "/about", text: "درباره ما" },
  { id: 1, url: "/connection", text: "ارتباط با ما" },
  { id: 1, url: "/project", text: "پروژه ها" },
];

export const socials: SoshialsType[] = [
  { id: 1, url: "https://twitter.com", icons: <FaTwitterSquare /> },
  { id: 2, url: "https://twitter.com", icons: <IoLogoLinkedin /> },
  { id: 3, url: "https://twitter.com", icons: <FaGithub /> },
];
