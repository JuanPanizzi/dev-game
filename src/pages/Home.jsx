import React, { useState } from 'react'
import { Footer } from '../components/Footer'
import '../styles/Home.css'
import { Welcome } from '../components/Welcome';
import { First } from '../components/First';
import { Second } from '../components/Second';
import { Third } from '../components/Third';
import {Fourth} from '../components/Fourth';
import { usePosition } from '../hooks/usePosition';
//Hooks



export const Home = () => {


  const {position, welcome, sadDev, first, second, third, fourth, victory, errores, handleWelcome, handleSadDev, 
    handlePista, handleFirst, handleSecond, handleReset, handleFourth, handleErrores, handleVictory} = usePosition()

  
    return (
    <main>
    <section>
      <div className='ctn-error-pista'>
    <h1 className='errores'>Errores: <span>{errores} </span> </h1>
      <h1 className='pista' onClick={handlePista}>Ver Solución</h1>
      </div>

       { welcome && !first && <Welcome 
       handleWelcome={handleWelcome} 
       handleReset={handleReset} 
       handleErrores={handleErrores} 
       errores={errores}/>}
       {!welcome && first && <First handleFirst={handleFirst} handleErrores={handleErrores} handleReset={handleReset} />}
       {second && <Second handleSecond={handleSecond}/>}
       {!second && third && <Third sadDev={sadDev}
        handleSadDev={handleSadDev} 
        handleFourth={handleFourth}/>}
      {!second && !third && fourth && <Fourth handleVictory={handleVictory} handleReset={handleReset}/> }
    </section>
    <section>
    <Footer position={position} sadDev={sadDev} victory={victory} />    
    </section>
    </main>
  )
}

