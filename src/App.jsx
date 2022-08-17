import TaskList from "./TaskList";
import TaskForm from "./TaskForm";
import { task as data } from "./task";
import { useState, useEffect } from "react";

function App() {
  const [task, setTask] = useState([]); // arreglo de objetos inicializado vacio

  useEffect(() => {
    setTask(data);
  }, []);

  function crearTask(tasks) {
    setTask([
      ...task,
      {
        id: task.length,
        nombre: tasks.nombre,
        descripcion: tasks.descripcion,
      },
    ]);
  }

  return (
    <>
      <TaskForm crearTask={crearTask} />
      <TaskList task={task} />
    </>
  );
}

export default App;
