import React from 'react'
import "./style.scss"

const Formulario = ({ onChange, tarea, onSubmit }) => {

  const {titulo, descripcion} = tarea;


  return (
    <div className='formContainer'>
        <h2>Lista de Tareas</h2>
        <form onSubmit={e => onSubmit(e)} className='form'>
            <h3>Agregar una Tarea</h3>

            <div className='inputsContainer'>

                <input 
                onChange={e => onChange(e)} 
                className='tituloInput' 
                type="text"
                name="titulo"
                placeholder='Titulo ....'
                value={titulo}
                />

                <textarea
                value={descripcion}
                name="descripcion"
                onChange={e => onChange (e)}
                placeholder='Descripcion ...' 
                className='descripcionInput' 
                ></textarea>

                <button className="agregar">Agregar</button>
            </div>
        </form>
    </div>
  )
}

export default Formulario