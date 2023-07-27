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
  <h1>¡Nuestro dev no ha parado de intentarlo gracias a tu consejo y ha conseguido trabajo!</h1>
        <h1>¡Felicitaciones!</h1>
  </div>
        <button onClick={()=>handleReset()} className='btn-third' >Reiniciar</button>
  </section>
)
}