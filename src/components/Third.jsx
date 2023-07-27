import React, { useState } from 'react'
import '../styles/Third.css'
// eslint-disable-next-line react/prop-types
export const Third = ({handleSadDev, sadDev, handleFourth}) => {

  const [positionLeft, setPositionLeft] = useState(false)
  const [positionRight, setPositionRight] = useState(false)
  
  const handlePosition = ()=>{
    setPositionLeft(true)
    if(positionLeft){
      setPositionLeft(false)
      setPositionRight(true)
    }
  }

  return (
    <section className='ctn-third'>
    <div className='ctn-welcome ctn-welcome-fs'>
    {sadDev ? 
    <>
      <h1>¡Oh no! ¡Nuestro Dev se ha desanimado!</h1> 
      <h1 >¡Aconsejale que siga haciendo proyectos y que nunca pare de intentarlo!</h1>
    </>
      :
      <h1>¡Bien! ¡Ya falta poco! ¡Ahora solo tienes que tocar el siguiente boton!</h1>
    }
    </div>
    {
      sadDev ?
      <button className={`${positionLeft && 'btn-advice-left'}
      ${positionRight && 'btn-advice-right'} 
      btn-third btn-third-advice`} 
      onMouseOver={()=> handlePosition()}
      onClick={handleFourth}
      >¡DAR CONSEJO!</button>
      :
      <>
      <button className={'btn-third'} onClick={handleSadDev} >Continuar</button>
      </>

    }
    </section>

)
}
