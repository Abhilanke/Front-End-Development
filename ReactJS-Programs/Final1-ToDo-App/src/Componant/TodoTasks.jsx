function TodoTasks({ task, tododate, onDelete }) {
  return (
    <div className="row my-2">
      <div className="col-6">{task}</div>
      <div className="col-4">{tododate}</div>
      <div className="col-2">
        <button className="btn btn-danger" onClick={onDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoTasks;
