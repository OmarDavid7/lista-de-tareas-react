import { useState } from "react";
import './tareasapp.css'

export default function Tarea({ item, onUpdate, onDelete }) {
  const [esEditable, setEsEditable] = useState(false);

  function FormEdit() {
    const [newValue, setNewValue] = useState(item.title);

    function handleSubmit(e) {
      e.preventDefault();
    }

    function handleChange(e) {
      const value = e.target.value;
      setNewValue(value);
    }

    function handleClickUpdate(){
        onUpdate(item.id, newValue);
        setEsEditable(false)
    }

    return (
      <form className="todoUpdateForm" onSubmit={handleSubmit}>
        <input
          type="text"
          className="todoInput"
          onChange={handleChange}
          value={newValue}
        />
        <button className="buttom" onClick={handleClickUpdate}>Update</button>
      </form>
    );
  }

  function TodoElement() {
    return (
      <div className="todoInfo">
        <span className="todoTitle">{item.title}</span>
         <button className="button" onClick={() => setEsEditable(true)}>Editar</button>
        <button className="buttonDelete" onClick={()=> onDelete(item.id)}>Eliminar</button>
      </div>
    );
  }

  return (
    <>
      <div className="todo">{esEditable ? <FormEdit /> : <TodoElement />}</div>
    </>
  );
}
