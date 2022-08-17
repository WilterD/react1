import TaskCard from "./TaskCard";


function TaskList({ task, deleteTask }) {
  if (task.length === 0) {
    return <h1>No hay tareas aun</h1>;
  }
  return (
    <>
      {task.map((task) => (
        <TaskCard key={task.id} task={task} deleteTask={deleteTask}  />
      ))}
    </>
  );
}

export default TaskList;
