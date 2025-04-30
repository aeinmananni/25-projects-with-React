import {
  MdDelete,
  MdCheck,
  MdWarning,
  MdOutlineCheck,
  MdRefresh,
} from "react-icons/md";

type TaskProps = {
  title: string;
  isCompleted: boolean;
  onDelete?: () => void;
  onCompleted?: () => void;
};

export default function Task({
  isCompleted,
  title,
  onDelete,
  onCompleted,
}: TaskProps) {
  return (
    <div className="w-full flex justify-between  py-2">
      <div
        className={`w-full border  text-justify p-1 rounded-lg flex flex-col gap-1 shadow-md ${
          isCompleted
            ? "shadow-green-200 border-green-400"
            : "shadow-yellow-200 border-yellow-400"
        } `}
      >
        {isCompleted ? (
          <MdOutlineCheck />
        ) : (
          <MdWarning className="text-yellow-500" />
        )}
        <small className={`${isCompleted && "line-through"}`}>{title}</small>
      </div>
      <div className="flex  gap-1 ">
        <MdDelete
          className="w-8 h-8 text-red-500"
          cursor={"pointer"}
          onClick={onDelete}
        />
        {isCompleted ? (
          <MdRefresh
            className="w-8 h-8 text-blue-600"
            cursor={"pointer"}
            onClick={onCompleted}
          />
        ) : (
          <MdCheck
            className="w-8 h-8 text-blue-600"
            cursor={"pointer"}
            onClick={onCompleted}
          />
        )}
      </div>
    </div>
  );
}
