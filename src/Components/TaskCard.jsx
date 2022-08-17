import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
// rafce
function TaskCard({ task }) {
  const { deleteTask } = useContext(TaskContext);

  return (
    <div className="max-w-sm shadow-lg p-10 rounded miTarjeta">
      
      <h1 className="font-bold text-xl mb-2 text-center capitalize text-white">{task.nombre}</h1>
      <p className="text-white text-base text-center">{task.descripcion}</p>
      <div className="text-center">
      <button className="miBoton text-white font-bold bg-red-500 px-2 py-1 rounded-md mt-4 hover:bg-red-400" onClick={() => deleteTask(task.id)}>Eliminar Tarea</button>
      </div>
       </div>

    

  );
}

export default TaskCard;
