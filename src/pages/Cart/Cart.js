import "./Cart.css";
import { useContext, useEffect, useState } from "react";
import { CartCont } from "../../context/CartContext/CartContext";
import { Link } from "react-router-dom";
import {
  collection,
  addDoc,
  getFirestore,
  updateDoc,
  doc,
} from "firebase/firestore";
import Swal from "sweetalert2";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Cart = () => {
  const { cart, clear, removeItem } = useContext(CartCont);
  const [total, setTotal] = useState(0);
  const [order, setOrder] = useState({});
  const [validated, setValidated] = useState(false);
  const [formValue, setFormValue] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const db = getFirestore();
  const querySnapshot = collection(db, "orders");

  useEffect(() => {
    setTotal(
      cart.reduce((prev, curr) => {
        return prev + curr.total;
      }, 0)
    );

    setOrder({
      items: cart.map((it) => {
        const { title, price, id, quantity } = it;
        return { title, price, id, quantity };
      }),
      total: cart.reduce((prev, curr) => {
        return prev + curr.total;
      }, 0),
    });
  }, [cart]);

  const createOrder = (event) => {
    event.preventDefault();
    const currentOrder = {
      ...order,
      buyer: formValue,
    };

    addDoc(querySnapshot, currentOrder)
      .then((response) => {
        console.log(response);
        Swal.fire(
          "Pedido solicitado",
          "id generado: " + response.id,
          "success"
        );
        updateStock();
      })
      .catch((error) => console.log(error));
  };

  const updateStock = () => {
    cart.forEach((element) => {
      const querySnapshot = doc(db, "items", element.id);
      updateDoc(querySnapshot, {
        stock: element.stock - element.quantity,
      })
        .then(() => {
          console.log("Se actualizo stock");
        })
        .catch((error) => console.log(error));
    });
    clear();
  };

  const handleInput = (event) => {
    setFormValue({
      ...formValue,
      [event.target.name]: event.target.value,
    });
  };

  const cleanForm = (event) => {
    event.preventDefault();
    setFormValue({
      name: "",
      phone: "",
      email: "",
    });
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  if (cart.length > 0) {
    return (
      <div className="container">
        <div className="listado_compra">
          {cart.map((producto) => (
            <div key={producto.id} className="producto_compra">
              <h4 key={producto.id}>{producto.title}</h4>
              <div>Cantidad: {producto.quantity}</div>
              <div>Precio: $ {producto.total}</div>
              <Button
                variant="secondary"
                onClick={() => removeItem(producto.id)}
              >
                Eliminar items
              </Button>
            </div>
          ))}
          <hr />
          <div>Total: $ {total}</div>
          <br />
          <Button variant="secondary" onClick={() => clear()}>
            Vaciar carrito
          </Button>
        </div>
        <div className="carrito_Formulario">
          <h3>Formulario solicitud de compra</h3>
          <form>
            <label>Nombre y Apellido</label>
            <input
              name="name"
              value={formValue.name}
              type="text"
              placeholder="Nombre y Apellido"
              onChange={handleInput}
            />
            <label>Telefono de contacto</label>
            <input
              name="phone"
              value={formValue.phone}
              type="text"
              placeholder="+54911 "
              onChange={handleInput}
            />
            <label>E-mail</label>
            <input
              name="email"
              value={formValue.email}
              type="email"
              placeholder="ejemplo@gmail.com"
              onChange={handleInput}
            />
            <div className="buttons">
              <Button variant="secondary" onClick={createOrder}>
                Solicitar pedido
              </Button>
              <Button variant="secondary" onClick={cleanForm}>
                Limpiar
              </Button>
            </div>
          </form>
        </div>
      </div>
    );
  } else {
    return (
      <div className="Sin_Productos">
        <div>No hay items agregados al carrito</div>
        <Link to="/">
          <Button variant="secondary">Volver a la lista de productos</Button>
        </Link>
      </div>
    );
  }
};

export default Cart;
