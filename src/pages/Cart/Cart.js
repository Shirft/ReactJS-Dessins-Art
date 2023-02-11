import './Cart.css';
import { useContext, useEffect, useState } from "react";
import { CartCont } from "../../context/CartContext/CartContext";
import { Link } from "react-router-dom";
import { collection, addDoc, getFirestore, updateDoc, doc } from "firebase/firestore";

const Cart = () => {
  const { cart, clear, removeItem} = useContext(CartCont);
  const [total, setTotal] = useState(0);
  const [order, setOrder] = useState({})
  const [formValue, setFormValue]=useState({
    name: '',
    phone: '',
    email: '',
  });
  const db=getFirestore();
  const querySnapshot=collection(db, 'orders');

  useEffect(() => {

    setTotal(
      cart.reduce((prev, curr) => {
        return prev + curr.total;
      }, 0)
    );

    setOrder({
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

    const currentOrder ={
      ...order,
      buyer: formValue,
    };
    
    addDoc(querySnapshot, currentOrder)
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
    clear();
  };

  const handleInput = (event) =>{
    setFormValue({
      ...formValue, 
      [event.target.name]: event.target.value,
    });
  };

  if (cart.length > 0) {
    return (
      <div className='container'>
        <div className='listado_compra'>
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
        <div className="carrito_Formulario">
          <h3>Formulario solicitud de compra</h3>
          <form >
            <label >Nombre y Apellido</label>
            <input name="name" value={formValue.name} type="text" placeholder="Nombre y Apellido" onChange={handleInput}/>
            <label >Telefono de contacto</label>
            <input name="phone" value={formValue.phone} type="text" placeholder="+54911 " onChange={handleInput}/>
            <label >E-mail</label>
            <input name="email" value={formValue.email} type="email" placeholder="ejemplo@gmail.com" pattern=".+@globex\.com" onChange={handleInput}/>
            <div className='buttons'>
              <button onClick={()=> createOrder()}>Solicitar pedido</button>
              <button>Limpiar</button>
            </div>
          </form>
        </div>
      </div>
    );

  } else {
    return (
      <div className='Sin_Productos'>
        <div>No hay items agregados al carrito</div>
        <Link to="/">
          <button>Volver a la lista de producto</button>
        </Link>
      </div>
    );
  }
};

export default Cart;
