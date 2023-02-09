import { useContext, useEffect, useState } from "react";
import { CartCont } from "../../context/CartContext/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, clear, removeItem} = useContext(CartCont);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(
      cart.reduce((prev, curr) => {
        return prev + curr.total;
      }, 0)
    );
  }, [cart]);

  if (cart.length > 0) {
    return (
      <div>
        {cart.map((producto) => (
          <div key={producto.id}>
            <h4 key={producto.id}>{producto.title}</h4>
            <div>Cantidad: {producto.quantity}</div>
            <div>{producto.total}</div>
            <button onClick={()=> removeItem(producto.id)}>Eliminar items</button>
          </div>
        ))}
        <hr />
        <div>Total: {total}</div>
        <br/>
        <button onClick={()=> clear()}>Vaciar carrito</button>
      </div>
    );
  } else {
    return (
      <div>
        <div>No hay items agregados al carrito</div>
        <Link to="/">
          <button>Volver a la lista de producto</button>
        </Link>
      </div>
    );
  }
};

export default Cart;
