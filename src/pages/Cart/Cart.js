import { useContext, useEffect, useState } from "react";
import { CartCont } from "../../context/CartContext/CartContext";
import { Link } from "react-router-dom";
import { collection, addDoc, getFirestore, updateDoc, doc } from "firebase/firestore";

const Cart = () => {
  const { cart, clear, removeItem} = useContext(CartCont);
  const [total, setTotal] = useState(0);
  const [order, setOrder] = useState({})
  const db=getFirestore();
  const querySnapshot=collection(db, 'orders');

  useEffect(() => {

    setTotal(
      cart.reduce((prev, curr) => {
        return prev + curr.total;
      }, 0)
    );

    setOrder({
      buyer: {
        name: 'jorge jorge',
        phone: '1132585478',
        email: 'testeo@hotmail.com',
      },
      items: cart.map((it)=>{
        const {title, price, id, quantity}=it;
        return{ title, price,id, quantity }
      }),
      total: cart.reduce((prev, curr) => {
        return prev + curr.total;
      }, 0),
    });

  }, [cart]);

  const createOrder = () =>{

    addDoc(querySnapshot, order)
    .then((response)=> {
      console.log(response);
      updateStock(); 
      alert("pedido solicitado, id generado: "+response.id)
    })
    .catch((error)=> console.log(error))

  };

  const updateStock = () =>{
    cart.forEach((element) => {
      const querySnapshot=doc(db, 'items', element.id)
      updateDoc(querySnapshot, {
        stock: element.stock-element.quantity,
      })
      .then(()=> {console.log('Se actualizo stock')})
      .catch((error)=> console.log(error))
    });
  };

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
        <button onClick={()=> createOrder()}>Solicitar pedido</button>
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
