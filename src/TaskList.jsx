function TaskList({task}) {
  

  if (task.length === 0) {
    return <h1>No hay tareas aun</h1>;
  }
  return (
    <>
      {task.map((task) => (
        <div key={task.id}> 
            <h1>{task.nombre}</h1>
            <p>{task.descripcion}</p>
        </div>
      ))}
    </>
  );
}

export default TaskList;
