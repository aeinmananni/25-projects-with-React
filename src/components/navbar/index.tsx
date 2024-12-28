import HeaderNav from "./header-nav";
import Menu from "./menu";
import { UseContext } from "../../context";
const Navbar = () => {
  const { showMenu } = UseContext();
  return (
    <div className="w-full flex flex-col">
      <HeaderNav />
      {showMenu && <Menu />}
    </div>
  );
};

export default Navbar;
