import Link from "../../custom/link";
import { links } from "./data";

const Menu = () => {
  return (
    <div className="w-full border flex sm:hidden justify-start p-2 shadow-md ">
      <div className="flex flex-col items-center gap-4">
        {links.map((it, index) => (
          <Link className={"!bg-transparent !w-max "} key={index} to={it.url}>
            {it.text}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Menu;
