import HeaderNav from "./header-nav";
import Menu from "./menu";

const Navbar = () => {
  return (
    <div className="w-full flex flex-col">
      <HeaderNav />
      {<Menu />}
    </div>
  );
};

export default Navbar;
