import { Button } from "../../custom/button";
import { GiHamburgerMenu } from "react-icons/gi";
const Header = () => {
  return (
    <Button className="p-2 bg-purple-600 text-white rounded-lg active:bg-purple-400 duration-300">
      <GiHamburgerMenu size={30} />
    </Button>
  );
};

export default Header;
