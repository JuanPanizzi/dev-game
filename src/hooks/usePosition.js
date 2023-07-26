import React, { useState } from 'react'

export const usePosition = () => {
  
  
  const [position, setPosition] = useState(0);
  
  const handleMove = () =>{
    if(position >=0 && position < 100){
      let newPosition = position + 20
        setPosition(newPosition)
      }  
    }
  
  
  
  
  
  return {
    position,
    handleMove
  }
}
