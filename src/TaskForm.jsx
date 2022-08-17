import { useState } from "react";

function TaskForm({ crearTask }) {
  const [nombre, setNombre] = useState("");

  const envioForm = (e) => {
    e.preventDefault(); // para que no se recargue la pagina
    console.log(nombre)
    crearTask(nombre);
  };

  return (
    <form onSubmit={envioForm}>
      <input
        placeholder="Nombre de la tarea"
        onChange={(e) => setNombre(e.target.value)}
      />
      <button>Guardar</button>
    </form>
  );
}

export default TaskForm;
