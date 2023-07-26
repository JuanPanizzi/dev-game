import React from 'react'
import '../styles/Welcome.css'

export const Welcome = ({ handleWelcome, handleErrores}) => {

  return (
    <div className='ctn-welcome'>
        <h1>Sigue las instrucciones correctamente para que el dev consiga su primer trabajo</h1>
        <h2>¡Ten cuidado con las trampas!</h2>
        <h3>Haz <span className='click' onClick={()=>handleErrores()}>click</span><span onClick={handleWelcome}> AQUI</span> para comenzar</h3>
    </div>
  )
}
