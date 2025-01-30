import { Button } from "../../../custom/button";

type FooterProps = {
  onNext?: () => void;
  onPrev?: () => void;
  onRandom?: () => void;
};

const Footer = ({ onNext, onPrev, onRandom }: FooterProps) => {
  return (
    <div className=" w-full p-1 flex justify-between">
      <div className="flex gap-2">
        <Button
          onClick={onPrev}
          className="text-xl text-rose-600 cursor-pointer"
        >
          {"<"}
        </Button>
        <Button
          onClick={onNext}
          className="text-xl text-rose-600 cursor-pointer"
        >
          {">"}
        </Button>
      </div>
      <div onClick={onRandom} className=" w-full flex justify-center">
        <Button className="text-xs text-rose-600 cursor-pointer bg-rose-200 w-16 ml-7">
          رندوم
        </Button>
      </div>
    </div>
  );
};

export default Footer;
