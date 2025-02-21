import { NavLink } from "react-router";
import Header from "./header";
import { data } from "./data";
import { HiOutlineXCircle } from "react-icons/hi2";
const Sidebar = () => {
  return (
    <div className="w-full h-full p-2 relative">
      <Header />
      <div className="absolute h-full bg-purple-300 w-1/6 start-0 top-0 rounded-l-md pt-5 pl-4">
        <HiOutlineXCircle
          size={20}
          className="absolute end-1 top-0.5 cursor-pointer"
        />

        <div className="w-full h-full gap-3 bg-purple-600 rounded-l-md flex flex-col p-3">
          {data.map((it, index) => (
            <NavLink
              key={index}
              to={it.url}
              className={({ isActive }) =>
                `flex items-center gap-2 text-white w-full  py-1 px-2 rounded-lg ${
                  isActive ? "bg-purple-300" : "border border-purple-300"
                }`
              }
            >
              <i>{it.icon}</i>
              <span>{it.text}</span>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
