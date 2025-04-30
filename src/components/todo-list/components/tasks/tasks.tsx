import { Task } from "./components";
import { useReactContext } from "../../../../context";
const Tasks = () => {
  const { tasks, setTasks } = useReactContext();

  return (
    <div className="border h-full overflow-y-auto p-1">
      {tasks.length > 0 ? (
        <div className="grid grid-cols-1 gap-2">
          {tasks.map((item) => (
            <Task
              key={item.id}
              {...item}
              onDelete={() =>
                setTasks((prev) => prev.filter((it) => it.id !== item.id))
              }
              onCompleted={() =>
                setTasks((prev) =>
                  prev.map((it) =>
                    it.id === item.id
                      ? { ...it, isCompleted: !it.isCompleted }
                      : it
                  )
                )
              }
            />
          ))}
        </div>
      ) : (
        <div className="absolute top-1/4 left-[40%] text-red-500 font-bold text-xl">
          {"تسکی موجود نیست"}
        </div>
      )}
    </div>
  );
};

export default Tasks;
