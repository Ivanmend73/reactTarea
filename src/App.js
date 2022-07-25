import React,{ useEffect, useState } from 'react';
import './App.scss';
import Formulario from "./Components/Formulario/index"
import ListaDeTareas from "./Components/Lista-Tareas/index"

function App() {
  const [tareas , setearTareas] = useState(() => {
    try {
      const tareaEnLocalStorage = localStorage.getItem('tareas')
      return tareaEnLocalStorage ?
      JSON.parse(tareaEnLocalStorage) : 
      []
    } catch(error) {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('tareas',JSON.stringify(tareas))
  }, [tareas])

  const [tarea, setearTarea] = useState({
    id: Math.random() * (9999999999 - 0) + 0,
    titulo: '',
    descripcion : "",
  })

  const { titulo, descripcion } = tarea;

  const addTarea = (tarea) => {
    setearTareas([...tareas, tarea])
  }

  const onChange = (e) => {
    setearTarea({...tarea, [e.target.name]: e.target.value})
  }

  const removeTarea = (id) => {
    const newTareas = [...tareas].filter((tarea) => tarea.id !== id)
    setearTareas(newTareas)
  }

  const onSubmit = (e) => {
    e.preventDefault();

    if(titulo === "" || descripcion === "") {

      alert("Debes llenar el formulario")
    }else {
      addTarea(tarea);
      setearTarea({
        id: Math.random() * (9999999999 - 0) + 0,
        titulo: '',
        descripcion : '',
      })
    }

  }
 
  return (
    <main className='main'>
      <Formulario onChange={onChange} tarea={tarea} onSubmit={onSubmit} />
      <ListaDeTareas tareas={tareas} removeTarea={removeTarea} />
   </main>
  );
}

export default App;
