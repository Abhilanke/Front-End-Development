function TodoTasks({ task, tododate }) {
  return (
    <div>
      <div className="row ">
        <div className="col-6">{task}</div>
        <div className="col-4">{tododate}</div>
        <div className="col-2">
          <button className="btn btn-danger">Delete</button>
        </div>
      </div>
    </div>
  );
}
export default TodoTasks;
