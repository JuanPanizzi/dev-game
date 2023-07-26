import React from 'react'
import '../styles/First.css'

export const First = ({ handleFirst, handleErrores, handleReset }) => {

  return (
    <div className='ctn-welcome'>
      <h1>¡Bien! Has logrado que el dev avance</h1>
      <h2>Toca el botón que dice <button className='span-green' onClick={() => { handleErrores(); handleReset(); }}>continuar</button>  para que el dev avance</h2>
      <div className='ctn-btn-first' >
        <button className='btn-red' onClick={handleFirst}>continuar</button>
        <button className='btn-green'
          onClick={() => { handleErrores(); handleReset(); }}>contiunar
        </button>
      </div>
    </div>
  )
}
