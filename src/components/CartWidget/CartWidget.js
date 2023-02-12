import './CartWidget.css';
import { CartCont } from "../../context/CartContext/CartContext";
import { useContext ,useState, useEffect} from "react";

const CartWidget = () => {
  const {cart}=useContext(CartCont);
  const [total, setTotal]=useState(0)

  useEffect(()=>{ 
    setTotal(cart.reduce((prev, curr)=>{
      return prev + curr.quantity;
    }, 0)
    );
  }, [cart]);

  return (
    <div className="Carrito">
      <div className='img_carrito'>
        <img alt="carrito" src="../../images/carrito.png"/>
      </div>
      <div className='span_carrito'>
        <span>{total}</span>
      </div>
        
    </div>
  )
}

export default CartWidget