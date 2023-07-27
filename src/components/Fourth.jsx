import React, { useEffect, useState } from 'react'

export const Fourth = ({handleVictory, handleReset}) => {
 
useEffect(() => {
  
  setTimeout(() => {
    
    handleVictory()

  }, 2000);
}, [])


return(

  <section className='ctn-third'>
  <div className='ctn-welcome ctn-welcome-fs'>
  <h1>¡Nuestro dev no ha dejado de intentarlo gracias a tu consejo y ha conseguido trabajo!</h1>
        <h1>¡Haz como él y nunca pares de intentar!</h1>
        <h1>¡Felicidades!</h1>
  </div>
        <button onClick={()=>handleReset()} className='btn-third' >Reiniciar</button>
  </section>
)
}