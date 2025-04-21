import { FaTasks } from "react-icons/fa";

export default function Header() {
  return (
    <div className="w-full bg-sky-700 p-2 rounded-md font-semibold flex justify-between items-center">
      <span>{"لیست کارهای مهم خود را بنویسید"}</span>
      <FaTasks />
    </div>
  );
}
