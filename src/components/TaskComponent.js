import { BiSolidTrash } from "react-icons/bi";

export const Task = (task) => {
  return (
    <div className="task">
      <input type="checkbox" />
      <h3>{task.taskName}</h3>
      <BiSolidTrash onClick={() => task.deleteTask(task.id)} className="icon" />
    </div>
  );
};

