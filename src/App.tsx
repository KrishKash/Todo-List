import React, { FC, ChangeEvent, useState } from "react";
import "./App.css";
import TodoTask from "./Components/TodoTask";
import { ITask } from "./Interfaces";

const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [deadline, setDealine] = useState<number>(0);
  const [description, setDescription] = useState<string>("");
  const [todoList, setTodoList] = useState<ITask[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    } else if (event.target.name === "description") {
      setDescription(event.target.value);
    } else {
      setDealine(Number(event.target.value));
    }
  };

  const addTask = (): void => {
    const newTask = { taskName: task, deadline: deadline, taskDesc: description };
    setTodoList([...todoList, newTask]);
    setTask("");
    setDealine(0);
    setDescription("");
  };

  const completeTask = (taskNameToDelete: string): void => {
    setTodoList(
      todoList.filter((task) => {
        return task.taskName !== taskNameToDelete;
      })
    );
  };

  return (
    <div className="App">
      <h2>To-Do List App</h2>
      <div className="header">
        <div className="inputContainer">
          <input
            required
            title="Task name"
            type="text"
            placeholder="Task name..."
            name="task"
            value={task}
            onChange={handleChange}
          />
          <input
            title="Task Description"
            type="textarea"
            placeholder="Task description..."
            name="description"
            value={description}
            onChange={handleChange}
          />
          <input
            title="Task deadline (in hours)"
            required
            type="number"
            placeholder="Deadline (in hours)..."
            name="deadline"
            value={deadline}
            onChange={handleChange}
          />
          <button disabled={(deadline === 0 || task.length < 0) ? true : false} title="Add task" onClick={addTask}>Add Task</button>
        </div>
      </div>

      <div className="todoList">
        {todoList.length > 0 && <TodoTask task={todoList} completeTask={completeTask} />
        }
      </div>
    </div>
  );
};

export default App;
