import "./App.css";
import ToDoApp from "./ToDoApp";
import Title from "./Componant/Title";
import Input11 from "./Componant/input11";
import TodoTasks from "./Componant/TodoTasks";

function App() {
  let data = [
    {
      todotask: "Buy Milk",
      tododate: "17/10/2024",
    },
    {
      todotask: "Go To College",
      tododate: "2/12/2024",
    },
    {
      todotask: "Hello",
      tododate: "22/12/2024",
    },
    {
      todotask: "Good By",
      tododate: "10/12/2024",
    },
  ];
  return (
    <div id="parant">
      <Title></Title>
      <div className="container text-center ">
        <Input11></Input11>
        {data.map((item, index) => (
          <TodoTasks
            key={index}
            task={item.todotask}
            tododate={item.tododate}
          ></TodoTasks>
        ))}
        {/* <TodoTasks task={todotask} tododate={tododate}></TodoTasks>
        <TodoTasks task={todotask1} tododate={tododate1}></TodoTasks>
       */}
      </div>
    </div>
  );
}

export default App;
