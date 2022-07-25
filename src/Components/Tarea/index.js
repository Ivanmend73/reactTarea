import React from 'react'
import "./style.scss"

const Tarea = ({titulo, descripcion, removeTarea}) => {
  return (
    <div className='tareaCard'>
        <div className='tituloContainer'>
            <p className='tituloCard'>{titulo}</p>
            <div 
            className='svg'
            onClick={removeTarea}
            >
                <i class="fa-solid fa-x"></i>
            </div>
        </div>
        <p className='descriptionCard '>{descripcion}</p>
    </div>
  )
}

export default Tarea