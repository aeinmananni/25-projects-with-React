import Header from "./header";
import { Carts } from "./carts";
const DarkMode = () => {
  return (
    <div className="flex flex-col w-full">
      <Header />
      <Carts />
    </div>
  );
};

export default DarkMode;
