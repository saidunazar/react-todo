import { updateTask } from "../shared/api";

function Task({ task, onTglStatus }) {
  const updateStatus = (e) => {
    const reqData = {
      id: e.id,
      complete: !e.completed,
    };
    updateTask(reqData).then((res) => {
      onTglStatus(task);
    });
  };

  return (
    <div className="card text-left" key={task.id}>
      <div className="row">
        <div className="col-10">
          <h4>{task.description}</h4>
          <div className="task-meta">
            <img
              src="https://icongr.am/feather/calendar.svg?size=12&color=b5b5b5"
              alt="calendar"
            />
            {task.date}
          </div>
        </div>

        <div className="col-2 is-center">
          {task.complete}
          <button
            className="button icon-only clear"
            onClick={() => updateStatus(task)}
          >
            {task.completed && "✅"}
            {!task.completed && "⬜"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Task;
