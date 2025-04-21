/* eslint-disable @typescript-eslint/no-unused-vars */
import { MdDelete, MdCheck, MdWarning, MdCheckCircle } from "react-icons/md";

export default function Tasks() {
  return (
    <div className="w-full flex justify-between  py-2">
      <div className="w-full border border-yellow-400 text-justify p-1 rounded-lg flex flex-col gap-1 shadow-md shadow-yellow-200">
        <MdWarning className="text-yellow-500" />
        <small className="line-through">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti cum
        </small>
      </div>
      <div className="flex  gap-1 ">
        <MdDelete className="w-8 h-8 text-red-500" cursor={"pointer"} />
        <MdCheck className="w-8 h-8 text-blue-600" cursor={"pointer"} />
      </div>
    </div>
  );
}
