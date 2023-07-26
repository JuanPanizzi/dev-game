
export const useMoves = () => {
  const [position, setPosition] = useState(0);

  const resetPosition = () =>{
    setPosition(0)
  }
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
          alert('¡Chequea la ortografía! ¡El botón rojo es el que dice "continuar" el verde esta mál escrito!')
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
  return {
    position,
    resetPosition,
    handleMove,
    handlePista,

  }
}
