import { useState } from "react";

function TaskForm({ crearTask }) {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const envioForm = (e) => {
    e.preventDefault(); // para que no se recargue la pagina
    crearTask({
      nombre,
      descripcion,
    });
    setNombre(""); // vaciar estados del formulario
    setDescripcion("");
  };

  return (
    <form onSubmit={envioForm}>
      <input
        autoFocus
        value={nombre} // para vaciar campos
        placeholder="Nombre de la tarea"
        onChange={(e) => setNombre(e.target.value)}
      />
      <br />
      <textarea
        value={descripcion}
        placeholder="escribe una descripcion"
        onChange={(e) => {
          setDescripcion(e.target.value);
        }}
      />
      <br />
      <button>Guardar</button>
    </form>
  );
}

export default TaskForm;
