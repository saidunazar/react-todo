import "./App.css";
import "./assets/styles.css";
import React from "react";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import TaskEdit from "./components/TaskEdit";
import { getTasks } from "./shared/api";

function App() {
  const onTglStatus = (task) => {
    setTasks(
      tasks.map((chkTask) => {
        chkTask.completed =
          task.id === chkTask.id ? !chkTask.completed : chkTask.completed;
        return chkTask;
      })
    );
  };

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getTasks().then((tasks) => {
      setTasks(tasks);
    });
  }, []);

  const [showTaskEdit, setShowTaskEdit] = useState(false);

  const onSaveTask = ({ desc, date }) => {
    let index = tasks.length + 1;
    setTasks([
      {
        id: index,
        description: desc,
        date: date,
        completed: false,
      },
      ...tasks,
    ]);
  };

  return (
    <div className="App">
      <Header></Header>
      <div className="container">
        <div className="col-12 text-right">
          <button
            className="button outline"
            onClick={() => setShowTaskEdit(!showTaskEdit)}
          >
            {!showTaskEdit && "New"}
            {showTaskEdit && "➖"}
          </button>
        </div>
        {showTaskEdit && <TaskEdit task={{}} onSaveTask={onSaveTask} />}
        <Tasks tasks={tasks} onTglStatus={onTglStatus}></Tasks>
      </div>
    </div>
  );
}
export default App;
