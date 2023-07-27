import React, { useState } from 'react'
import { Footer } from '../components/Footer'
import '../styles/Home.css'
import { Welcome } from '../components/Welcome';
import { First } from '../components/First';
import { Second } from '../components/Second';
import { Third } from '../components/Third';
import {Fourth} from '../components/Fourth';
import { usePosition } from '../hooks/usePosition';

export const Home = () => {


  const {position, welcome, sadDev, first, second, third, fourth, victory, errores, handleWelcome, handleSadDev, 
    handlePista, handleFirst, handleSecond, handleReset, handleFourth, handleErrores, handleVictory} = usePosition()

    return (
    <main>
    <section>
      <div className='ctn-error-pista'>
    <button className='errores'>Errores: <span>{errores} </span> </button>
      <button className='pista' onClick={handlePista}>Ver Solución</button>
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

