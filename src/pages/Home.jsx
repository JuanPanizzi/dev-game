import React, { useState } from 'react'
import { Footer } from '../components/Footer'
import '../styles/Home.css'
import { Welcome } from '../components/Welcome';
import { First } from '../components/First';
import { Second } from '../components/Second';
import { Third } from '../components/Third';
import {Fourth} from '../components/Fourth';
import confetti from 'canvas-confetti'
//Hooks



export const Home = () => {

  const [position, setPosition] = useState(0);
  const [welcome, setWelcome] = useState(true)
  const [first, setFirst] = useState(false)
  const [second, setSecond] = useState(false)
  const [third, setThird] = useState(false)
  const [fourth, setFourth] = useState(false)
const [sadDev, setSadDev] = useState(false)
const [errores, setErrores] = useState(0)
const [victory, setVictory] = useState(false)

// const resetPosition = () =>{
//   setPosition(0)
// }
const handleMove = () =>{
  if(position >=0 && position < 100){
    let newPosition = position + 20
      setPosition(newPosition)
    }  
  }
  const handlePista = () =>{
    switch (position) {
      case 0:
        alert('Tienes que clickear directamente sobre la palabra "AQUI"')
        break;
    case 20:
        alert('¡Chequea la ortografía! ¡El botón rojo es el que dice "continuar". Clickea en él. ¡El verde esta mál escrito!')
        break;
    case 40:
      alert('Chequea el titulo dentro del cuadro de abajo. En "¡Ayuda al dev!" está la v que buscas. Clickea en la v de la palabra "de-v-"')
      break;
      case 60:
        alert('¡Has como el dev y sigue intentando! ¡En algún momento el botón se detendrá!')
        break;
      default:
    }
  }
  
    const handleWelcome = () =>{
      handleMove()
      setWelcome(false) //hay que volver a cambiarlo despues
      setFirst(true)
    }
    const handleFirst = () =>{
      handleMove()
      setFirst(false)
      setSecond(true)
    }
    const handleSecond = () =>{
      handleMove()
      setThird(true)
      setSecond(false)
    }
    const handleSadDev = () =>{
      setSadDev(true)
    }
    const handleFourth = () =>{
      handleMove()
      setSadDev(false)
      setThird(false)
      setFourth(true)
    }
    const handleReset = ()=>{
      setPosition(0) //resetPositcion
      setWelcome(true)
      setFirst(false)
      setSecond(false)
      setThird(false)
      setFourth(false)
      setVictory(false)
      if(fourth){
        setErrores(0)
      }
  
    }
    const handleErrores = ()=>{
        setErrores(errores+1)
        alert('¡Error! ¡Sumaste un error!')
    }
    
    const handleVictory=()=>{
      setVictory(true)
      confetti()
    }
  
    return (
    <main>
    <section>
      <div className='ctn-error-pista'>
    <h1 className='errores'>Errores: <span>{errores} </span> </h1>
      <h1 className='pista' onClick={handlePista}>Revelar Solución</h1>
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

