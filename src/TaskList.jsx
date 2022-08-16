import { task as data } from "./task";
import { useState, useEffect } from "react";

// console.log(task);

function TaskList() {
  const [task, setTask] = useState([]);

  useEffect(() => {
    setTask(data);
  }, []);

  if (task.length === 0) {
    <h1>No hay tareas aun</h1>;
  }
  return (
    <div>
      {task.map((task) => (
        <div key={task.id}>
            <h1>{task.nombre}</h1>
            <p>{task.descripcion}</p>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
