import { Outlet } from "react-router";
import Link from "../custom/link";
const Home = () => {
  return (
    <div className="h-full w-full flex justify-center items-center">
      <div className="w-full h-full flex  overflow-y-auto border-sky-900 border">
        <Outlet />
      </div>
      <div className="w-32 h-full gap-2 border border-sky-900 flex flex-col items-center justify-start p-2">
        <Link to={"/"}>{"passwordInput"}</Link>
        <Link to={"accordion"}>{"Accordion"}</Link>
        <Link to={"lorm-maker"}>{"Lorm maker"}</Link>
      </div>
    </div>
  );
};

export default Home;
