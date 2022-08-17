import { createContext, useState, useEffect } from "react";

import { task as data } from "../Components/task";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [task, setTask] = useState([]); // arreglo de objetos inicializado vacio

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

  useEffect(() => {
    setTask(data);
  }, []);

  const deleteTask = (id) => {
    setTask(task.filter((task) => task.id !== id));
  };

  return (
    <TaskContext.Provider
      value={{
        task,
        crearTask,
        deleteTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}

export default TaskContext;
