
import { useState } from 'react'

const ItemCount = () => {
  const [contador, setContador]=useState(0);
  const suma = () =>{
    setContador(contador+1);
  };
  const resta = () =>{
    if(contador<=0){
      return;
    }else{
      setContador(contador-1);
    }
  };
  return (
    <div>
        <div className='controles'>
            <button onClick={resta}>-</button>
            <span>{contador}</span>
            <button onClick={suma}>+</button>
        </div>
        <div>
            <button>Agregar al carrito</button>
        </div>
        
    </div>
  )
}

export default ItemCount