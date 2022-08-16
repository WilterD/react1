import React from "react";
import {useState} from 'react';

const TaskForm = () => {

    const [titulo, setTitulo] = useState("")

    const envioForm = (e)=>{
        e.preventDefault();
        console.log(titulo);
    }

  return (
    <form onSubmit={envioForm}>
      <input
        type="text"
        placeholder="Nombre de la tarea"
        onChange={(e) => {
        //   console.log("cambio");
        setTitulo(e.target.value)
        }}
      />
      <button>Guardar</button>
    </form>
  );
};

export default TaskForm;
