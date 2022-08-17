import TaskList from "./Components/TaskList";
import TaskForm from "./Components/TaskForm";
import { task as data } from "./Components/task";
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
  
  const deleteTask = (id) => {
    setTask(task.filter(task=>task.id !== id));
  }

  return (
    <>
      <TaskForm crearTask={crearTask} />
      <TaskList task={task} deleteTask={deleteTask} />
    </>
  );
}

export default App;
