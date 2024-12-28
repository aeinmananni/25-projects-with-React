import Link from "../../custom/link";
import { links } from "./data";

const Menu = () => {
  return (
    <div className="w-full border flex sm:hidden justify-start p-2 shadow-md ">
      <div className="flex flex-col items-center gap-4  w-full">
        {links.map((it, index) => (
          <div className="w-full hover:bg-blue-300 rounded-md group duration-300">
            <Link
              className={
                "!bg-transparent !w-full !justify-start group-hover:!text-white"
              }
              key={index}
              to={it.url}
            >
              {it.text}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
