import { useState } from "react";

import { BiSolidTrash } from "react-icons/bi";
import { BiPlusCircle } from "react-icons/bi";
import { BiListPlus } from "react-icons/bi";

import { Task } from "./TaskComponent";

const ListComponent = () => {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");
  const inTask = document.getElementById("inTask");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
    };
    if (newTask.trim() !== "") {
      setTodoList([...todoList, task]);
    }
    setNewTask("");
    inTask.value = "";
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      addTask();
    }
  };

  const clearList = () => {
    setTodoList([]);
  };

  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  };

  return (
    <div className="box">
      <header>
        <div className="title">
          <h1>ToDo List</h1>
          <BiSolidTrash
            className="icon"
            onClick={clearList}
          />
        </div>
      </header>
      <div className="spacer"></div>

      <div className="list">
        {todoList.length === 0 ? (
          <div className="empty">
            <h1>Add some Tasks</h1>
            <BiListPlus className="add-list" />
          </div>
        ) : (
          todoList.map((task) => {
            return <Task taskName={task.taskName} id={task.id} deleteTask={deleteTask} />;
          })
        )}

        <div className="add-task">
          <BiPlusCircle className="add-icon" onClick={addTask} />
          <input
            id="inTask"
            onChange={handleChange}
            onKeyDown={handleKeyPress}
            type="text"
            placeholder="New task..."
          />
        </div>
      </div>
    </div>
  );
};

export default ListComponent;
