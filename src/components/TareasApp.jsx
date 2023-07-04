import { useState } from "react";
import Tarea from "./Tarea";
import './tareasapp.css'

export default function TareasApp() {
  const [title, setTitle] = useState("");
    //estado para guardar todas las tareas
    const [tareas, setTareas] = useState([]);

  const handleClick = (e) => {
    e.preventDefault();
    setTitle();
  };

  //evento para actualizar el estado
  const handleChange = (e) => {
    const value = e.target.value;
    setTitle(value);
  };

  const handleSubmit = (e)=>{
    e.preventDefault();
    const nuevaTarea = {
        id: crypto.randomUUID(),
        title: title,
        completed: false,
    }

    //setTareas([...tareas, nuevaTarea]);
    const temp = [...tareas];
    temp.unshift(nuevaTarea);
    setTareas(temp);
    setTitle("");
  }

  function handleUpdate(id, value){
    const temp = [...tareas];
    const item = temp.find(item => item.id === id);
    item.title = value;
    setTareas(temp);
  }

  function handleDelete(id){
    const temp = tareas.filter(item => item.id !== id);
    setTareas(temp);
  }

  return (
    <>
      <div className="todoContainer">
        <form className="todoCreateForm" onSubmit={handleSubmit}>
          <input
            type="text"
            className="todoInput"
            value={title}
            onChange={handleChange}
          />
          <input
            onClick={handleSubmit}
            type="submit"
            value="Agregar tareas"
            className="buttonCreate"
          />
        </form>

        <div className="todosContainer">
            {
                tareas.map((item)=>(
                   <Tarea key={item.id} item={item} onUpdate={handleUpdate} onDelete={handleDelete}/> 
                   //pasamos el props a Tarea.jsx
                ))
            }
        </div>
      </div>
    </>
  );
}
