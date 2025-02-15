import { Image } from "../../../../custom/img";
type CartProps = {
  src: string;
  title: string;
  exp: string;
};

const Cart = ({ src, title, exp }: CartProps) => {
  return (
    <div
      className={`w-max min-h-56 shadow-lg rounded-lg flex flex-col gap-2 p-1 items-center bg-slate-300`}
    >
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
