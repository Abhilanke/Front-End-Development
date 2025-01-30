import "./App.css";
import Title from "./Componant/Title";
import Input11 from "./Componant/input11";
import TodoTasks from "./Componant/TodoTasks";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task, date) => {
    const newTask = {
      id: Date.now(),
      task,
      date,
    };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div id="parent" class="abhi">
      <Title />
      <div className="container text-center">
        <Input11 addTask={addTask} />
        {tasks.map((item) => (
          <TodoTasks
            key={item.id}
            task={item.task}
            tododate={item.date}
            onDelete={() => deleteTask(item.id)}
          />
        ))}
      </div>
    </div>
  );
}
export default App;
