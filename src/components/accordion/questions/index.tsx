/* eslint-disable @typescript-eslint/no-unused-expressions */
import { useState } from "react";
import Button from "../../../custom/button";
import { BiPlus } from "react-icons/bi";
type QuestionProps = {
  className?: string;
  title?: string;
  exp?: string;
  onClick?: () => void;
};

const Question = ({ title, onClick, exp, className }: QuestionProps) => {
  const [showInfo, setShowInfo] = useState<boolean>(false);
  return (
    <div className="flex flex-col">
      <div
        className={`border flex items-center justify-between p-2 rounded-lg ${className}`}
      >
        <h1>{title}</h1>
        <Button
          onClick={() => {
            onClick && onClick();
            setShowInfo((c) => !c);
          }}
          className="bg-sky-800 text-white p-2 rounded-full"
        >
          {<BiPlus />}
        </Button>
      </div>
      {showInfo && exp && <div className="w-full h-max p-2">{exp}</div>}
    </div>
  );
};

export default Question;
