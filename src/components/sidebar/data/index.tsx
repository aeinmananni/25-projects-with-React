import { SidebarType } from "../model";
import { MdHome } from "react-icons/md";
import { FaUserFriends, FaFolderOpen, FaWpforms } from "react-icons/fa";

export const data: SidebarType[] = [
  { id: 1, url: "/Sidebar", text: "خانه", icon: <MdHome /> },
  { id: 2, url: "/team", text: "تیم ما", icon: <FaUserFriends /> },
  { id: 3, url: "/projects", text: "پروژه ها", icon: <FaFolderOpen /> },
  { id: 4, url: "/docs", text: "پرونده ها", icon: <FaWpforms /> },
];
