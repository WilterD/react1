
import { useContext } from "react";
import {TaskContext} from '../context/TaskContext'; 
// rafce
function TaskCard({task}){

 const {deleteTask} = useContext(TaskContext)

  return (
    <div>
        <h1>{task.nombre}</h1>
        <p>{task.descripcion}</p>
        <button onClick={() => deleteTask(task.id)}>Eliminar Tarea</button>
      </div>
  );
};

export default TaskCard;
