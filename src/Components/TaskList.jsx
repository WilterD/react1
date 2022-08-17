import TaskCard from "./TaskCard";
import { useContext } from "react";
import {TaskContext} from '../context/TaskContext';

function TaskList() {

  const {task } = useContext(TaskContext)

  if (task.length === 0) {
    return <h1>No hay tareas aun</h1>;
  }
  return (
    <>
      {task.map((task) => (
        <TaskCard key={task.id} task={task}   />
      ))}
    </>
  );
}

export default TaskList;
