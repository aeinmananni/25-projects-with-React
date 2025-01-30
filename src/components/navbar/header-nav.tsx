import { FaReact } from "react-icons/fa";
import { FcMenu } from "react-icons/fc";
import { links, socials } from "./data";
import { useReactContext } from "../../context";
import { RxCross1 } from "react-icons/rx";
import { Link } from "../../custom/link";
const HeaderNav = () => {
  const { setShowMenu, showMenu } = useReactContext();
  return (
    <div className="w-full h-12 shadow-md flex justify-between items-center p-2 gap-2 relative">
      <i onClick={() => setShowMenu((c) => !c)}>
        {showMenu ? (
          <RxCross1 cursor={"pointer"} />
        ) : (
          <FcMenu className="sm:hidden" size={20} cursor={"pointer"} />
        )}
      </i>
      <FaReact size={43} className="text-blue-600 absolute left-2 sm:right-2" />
      <div className=" w-full  gap-2  justify-center  hidden sm:flex">
        {links.map((it, index) => (
          <Link className={"!bg-transparent !w-max "} key={index} to={it.url}>
            {it.text}
          </Link>
        ))}
      </div>
      <div className=" gap-1 hidden sm:flex">
        {socials.map((it, index) => (
          <Link key={index} to={it.url}>
            {it.icons}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HeaderNav;
