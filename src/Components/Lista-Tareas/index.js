import React from 'react'
import Tarea from "../Tarea/index"
import "./style.scss"

const ListaDeTareas = ({ tareas,removeTarea }) => {
  return (
    <dit className="tareaContainer">
        {tareas && tareas.map(({titulo, descripcion, id}) => <Tarea titulo={titulo} descripcion={descripcion} removeTarea={() => removeTarea(id)} />) }
    </dit>
  )
}

export default ListaDeTareas