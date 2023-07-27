import React, { useState } from 'react'
import confetti from 'canvas-confetti';
export const usePosition = () => {
  
  
  const [position, setPosition] = useState(0);
  const [welcome, setWelcome] = useState(true)
  const [first, setFirst] = useState(false)
  const [second, setSecond] = useState(false)
  const [third, setThird] = useState(false)
  const [fourth, setFourth] = useState(false)
const [sadDev, setSadDev] = useState(false)
const [victory, setVictory] = useState(false)
const [errores, setErrores] = useState(0)

  
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
        alert('Chequea el título dentro del cuadro de abajo. En el título "¡Ayuda al dev!" está la v que buscas. Clickea en la v de la palabra "dev" de dicho título')
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
     
    const handleVictory=()=>{
      setVictory(true)
      confetti()
    }
    const handleErrores = ()=>{
      setErrores(errores+1)
      alert('¡Error! ¡Sumaste un error! Puedes clickear en "ver solucion" para tener una ayuda')
  }
  
  
  
  return {
    position,
    welcome,
    first,
    second,
    third,
    fourth,
    sadDev,
    victory,
    errores,
    handleWelcome,
    handleSadDev,
    handleMove,
    handlePista,
    handleFirst,
    handleSecond,
    handleFourth,
    handleReset,
    handleVictory,
    handleErrores
  }
}
