import { Image } from "../../../../custom/img";
import { useReactContext } from "../../../../context";
type CartProps = {
  src: string;
  title: string;
  exp: string;
};

const Cart = ({ src, title, exp }: CartProps) => {
  const { darkMode } = useReactContext();

  console.log("DARK MODE : ", darkMode);
  return (
    <div className="w-max min-h-56 shadow-lg rounded-lg flex flex-col gap-2 p-1 items-center">
      <div className="w-64 h-36 overflow-hidden">
        <Image
          src={src}
          styles={{ parentClassName: " !w-full" }}
          className="rounded-t-md"
        />
      </div>

      <span>{title}</span>
      <span>{exp}</span>
    </div>
  );
};

export default Cart;
