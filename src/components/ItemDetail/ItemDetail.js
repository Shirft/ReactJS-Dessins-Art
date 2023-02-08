import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartCont } from "../../context/CartContext/CartContext";

const ItemDetail = ({ objeto }) => {
  const { addItem } = useContext(CartCont);
  const stock = 10;
  const [contador, setContador] = useState(1);

  return (
    <div className="unProducto">
      <img alt={objeto.description} src={objeto.pictureUrl} />
      <div>
        <h2>{objeto.title}</h2>
        <h3>Cantidad de productos elegidos {contador}</h3>
        <div>Precio: ${objeto.price}</div>
        <div>Stock: {stock}</div>
        <p>
          Descripción del producto:
          <br />
          {objeto.description}
        </p>
        <ItemCount
          contador={contador}
          valUpgrade={setContador}
          stock={stock}
        ></ItemCount>
      </div>
      <div>
        <button
          className="agregarCarrito"
          onClick={() => addItem(objeto, contador) }
        >
          Agregar al carrito
        </button>
      </div>
      <Link to={`/cart`}>
        <button className="terminarCompra">Terminar mi compra</button>
      </Link>
    </div>
  );
};

export default ItemDetail;
