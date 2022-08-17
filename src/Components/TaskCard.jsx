// rafce
const TaskCard = ({ task }) => {
  return (
    <div>
      <h1>{task.nombre}</h1>
      <p>{task.descripcion}</p>
    </div>
  );
};

export default TaskCard;
