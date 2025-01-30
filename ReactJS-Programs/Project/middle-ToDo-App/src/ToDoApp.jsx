function ToDoApp() {
  return (
    <div>
      <h2 class="text-center">Todo App</h2>
      <div class="container text-center">
        <div class="row">
          <div class="col-6">
            <input type="text" />
          </div>
          <div class="col-4">
            <input type="date" />
          </div>
          <div class="col-2">
            <button class="btn btn-success">Add</button>
          </div>
        </div>

        <div class="row">
          <div class="col-6">By Milk</div>
          <div class="col-4">04/10/2023</div>
          <div class="col-2">
            <button class="btn btn-danger">Delete</button>
          </div>
        </div>

        <div class="row">
          <div class="col-6">Go To Collage</div>
          <div class="col-4">04/10/2024</div>
          <div class="col-2">
            <button class="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ToDoApp;
