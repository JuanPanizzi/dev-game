import React, { useEffect, useState } from 'react'
import '../styles/Second.css'

const tablero = ["a","b","c","d","e","f","g","h", "i", "j", "n", "o", "r", "s", "t", "u", "b", "w", "y", "z"].sort(() => Math.random() - 0.5);
const letrasA = ["a", "d", "g", "j", "r", "u", "y"]
const letrasB = ["b", "e", "h", "n","s", "b", "z"]
const letrasC = ["c", "f", "i", "o", "t", "w"]

export const Second = ({handleSecond}) => {

    const [showD, setShowD] = useState(false)
    const [showE, setShowE] = useState(false)
    const [showV, setShowV] = useState(false)
    const [completeDev, setcompleteDev] = useState([])
   
    const handleShowText = (letra) =>{
        switch (letra) {
            case "d":
                setShowD(true)
                setcompleteDev([...completeDev].concat("d"))
                break;
            case "e":
                setShowE(true)
                setcompleteDev([...completeDev].concat("e"))
                break;
            case "v":
                setShowV(true)
                setcompleteDev([...completeDev].concat("v"))
                break;
            default:
                break;
        }
        return null
    }

    useEffect(() => {

        if(completeDev.includes("d") && completeDev.includes("e") && completeDev.includes("v")  ){
            handleSecond()
        }

    }, [completeDev])
    

  return (
    <>
    <div className='ctn-second ctn-welcome'>
        <h1>Clickea las letras del siguiente cuadro para formar la palabra &quot;DEV&quot; </h1>

    </div>
    <section className='section-second'>

    <div className='ctn-second ctn-welcome'>
    <h1>¡Ayuda al de<span className='letter-v' onClick={()=> handleShowText("v")} >v!</span></h1>
    <div className='tablero'>
        {tablero.map((letra, index)=>
        { 
            return (
                <div key={index} 
                className={`${letrasA.includes(letra) && 'letra-color-a'} 
                ${letrasB.includes(letra) && 'letra-color-b'}
                 ${letrasC.includes(letra) && 'letra-color-c'}`}
                onClick={()=> handleShowText(letra)}
                >{letra}</div>               
                )
            }
        )}
    </div>
    </div>
    <div className='words'>
            <div><span className={showD ? "showText" : "disableText" }>D</span></div>
            <div><span className={showE ? "showText" : "disableText" }>E</span></div>
            <div><span className={showV ? "showText" : "disableText" }>V</span></div>
    </div>

    </section>

</>

    )
}
