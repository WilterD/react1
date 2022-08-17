import { useState } from "react";

function TaskForm({ crearTask }) {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const envioForm = (e) => {
    e.preventDefault(); // para que no se recargue la pagina
    crearTask({
      nombre,
      descripcion
    });
  };

  return (
    <form onSubmit={envioForm}>
      <input
        placeholder="Nombre de la tarea"
        onChange={(e) => setNombre(e.target.value)}
      />
      <br />
      <textarea placeholder="escribe una descripcion" onChange={(e) =>{
        setDescripcion(e.target.value)
      }} />
      <br />
      <button>Guardar</button>
    </form>
  );
}

export default TaskForm;
