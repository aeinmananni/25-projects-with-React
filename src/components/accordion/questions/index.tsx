/* eslint-disable @typescript-eslint/no-unused-expressions */
import { useState } from "react";

import { BiPlus } from "react-icons/bi";
import { Button } from "../../../custom/button";
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
        className={`border overflow-hidden flex items-center justify-between p-2 rounded-lg  ${className}`}
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
      {exp && (
        <div
          className={`w-full  px-2  mt-4 overflow-hidden transition-[max-height] duration-300  ${
            showInfo ? "max-h-64  " : "max-h-0 "
          }`}
        >
          <span>{exp}</span>
        </div>
      )}
    </div>
  );
};

export default Question;
