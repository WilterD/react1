// rafce
const TaskCard = ({ task , deleteTask}) => {
  return (
    <div>
      <h1>{task.nombre}</h1>
      <p>{task.descripcion}</p>
      <button onClick={() => deleteTask(task.id)}>Eliminar Tarea</button>
    </div>
  );
};

export default TaskCard;
