import { Outlet } from "react-router";
import Link from "../custom/link/link";
const Home = () => {
  return (
    <div className="h-full w-full flex justify-center items-center">
      <div className="w-full h-full flex  overflow-hidden border-sky-900 border">
        <Outlet />
      </div>
      <div className="w-36 h-full gap-2 border border-sky-900 flex flex-col items-center justify-start p-2 overflow-y-auto">
        <Link to={"/"}>{"passwordInput"}</Link>
        <Link to={"accordion"}>{"Accordion"}</Link>
        <Link to={"lorm-maker"}>{"Lorm maker"}</Link>
        <Link to={"navbar"}>{"navbar"}</Link>
        <Link to={"reviews"}>{"reviews"}</Link>
        <Link to={"scroll-tracker"}>{"scrollTracker"}</Link>
        <Link to={"search-images"}>{"searchImages"}</Link>
        <Link to={"send-email"}>{"sendEmail"}</Link>
        <Link to={"dark-mode"}>{"darkMode"}</Link>
        <Link to={"Sidebar"}>{"Sidebar"}</Link>
        <Link to={"library"}>{"library"}</Link>
        <Link to={"box-shadow"}>{"boxShadow"}</Link>
        <Link to={"filter-products"}>{"filterProducts"}</Link>
        <Link to={"todo-list"}>{"todoList"}</Link>
        <Link to={"slider"}>{"slider"}</Link>
      </div>
    </div>
  );
};

export default Home;
