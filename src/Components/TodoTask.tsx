import React from "react";
import { ITask } from "../Interfaces";

interface Props {
  task: ITask[];
  completeTask(taskNameToDelete: string): void;
}

const TodoTask = (list: Props) => {
  return (
    <div className="task">
      <div className="content">
        <table>
          <thead>
            <tr>
              <th>Task Name</th>
              <th>Task Deadline(in hrs)</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>

            {list.task.map((task: ITask, key: number) => {
              return (
                <tr>
                  <td>{task.taskName}</td>
                  <td>{task.deadline}</td>
                  <td>
                    <button onClick={() => {
                      list.completeTask(task.taskName);
                    }}
                    >
                      X
                    </button>
                  </td>
                </tr>)
            })}

          </tbody>
        </table>

      </div>

    </div>
  );
};

export default TodoTask;
