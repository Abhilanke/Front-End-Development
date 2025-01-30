import { useState } from "react";

function Input11({ addTask }) {
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = () => {
    if (task.trim() && date) {
      addTask(task, date);
      setTask("");
      setDate("");
    }
  };

  return (
    <div>
      <div className="row ">
        <div className="col-6 ">
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Enter Task"
            className="form-control"
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="col-2">
          <button className="btn btn-success" onClick={handleSubmit}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default Input11;
