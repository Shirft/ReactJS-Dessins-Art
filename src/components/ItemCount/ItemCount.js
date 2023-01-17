import { useState } from 'react'
import './ItemCount.css';

const ItemCount = () => {
  const stock=10;
  const [contador, setContador]=useState(0);
  const suma = () =>{
    if(contador==stock){
      alert("no hay mas stock")
      return;
    }
    setContador(contador+1);
  };
  const resta = () =>{
    if(contador==0){
      return;
    }
    setContador(contador-1);
  };
  
  return (
    <div className='contador'>
        <div className='controles'>
            <button onClick={resta}>-</button>
            <span>{contador}</span>
            <button onClick={suma}>+</button>
        </div>
        <div>
            <button className='agregarCarrito'>Agregar al carrito</button>
        </div>
        
    </div>
  )
}

export default ItemCount