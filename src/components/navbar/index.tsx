import { FaReact } from "react-icons/fa";
import { links, socials } from "./data";
import Link from "../../custom/link";
const Navbar = () => {
  return (
    <div className="w-full h-max shadow-md flex justify-between items-center p-2 gap-2">
      <FaReact size={43} className="text-blue-600" />
      <div className="flex w-1/2 gap-2  justify-center">
        {links.map((it, index) => (
          <Link className={"!bg-transparent !w-max "} key={index} to={it.url}>
            {it.text}
          </Link>
        ))}
      </div>
      <div className="flex gap-1">
        {socials.map((it, index) => (
          <Link key={index} to={it.url}>
            {it.icons}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
