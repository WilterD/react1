import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";
function TaskForm() {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const { crearTask } = useContext(TaskContext);

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
    <div className="max-w-md mx-auto">
      <form onSubmit={envioForm} className="rounded p-10 bg-slate-800">
        <h1 className="capitalize text-2xl text-center font-bold text-white mb-3">Crea tu tarea 😎</h1>
        <input
          className="rounded-md bg-slate-300 p-3 w-full mb-2"
          autoFocus
          value={nombre} // para vaciar campos
          placeholder="Nombre de la tarea"
          onChange={(e) => setNombre(e.target.value)}
        />
        <br />
        <textarea
          className="rounded bg-slate-300 p-3 w-full mb-2"
          value={descripcion}
          placeholder="Escribe una descripción"
          onChange={(e) => {
            setDescripcion(e.target.value);
          }}
        />
        <br />
        <div className="text-center">
        <button className="miBoton rounded mx-auto px-3 py-1   bg-indigo-500 hover:cursor-pointer hover:bg-blue-400 text-white font-bold transition-colors">Guardar</button>
        </div>
      </form>
    </div>
  );
}

export default TaskForm;
