import { Input } from "../../custom/input";
import { Link } from "../../custom/link";
import { links } from "./data";
const Header = () => {
  return (
    <div className="w-full flex h-16 shadow-md bg-slate-300  justify-evenly items-center">
      <div className="flex h-full w-max items-center gap-3 justify-start">
        {links.map((it, index) => (
          <Link key={index} to={it.to} className={"!max-w-max border"}>
            {it.title}
          </Link>
        ))}
      </div>
      <Input
        onChange={(e) => console.log(e.target.checked)}
        type="checkbox"
        className="toggle toggle-success toggle-md"
        defaultChecked
      />
    </div>
  );
};

export default Header;
