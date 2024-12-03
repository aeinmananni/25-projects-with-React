import Button from "../../../custom/button";
import { BiPlus } from "react-icons/bi";
type QuestionProps = {
  className?: string;
};

const Question = ({ className }: QuestionProps) => {
  return (
    <div
      className={`border flex items-center justify-between p-2 rounded-lg ${className}`}
    >
      <h1>TTTT</h1>
      <Button className="bg-sky-800 text-white p-2 rounded-full">
        {<BiPlus />}
      </Button>
    </div>
  );
};

export default Question;
