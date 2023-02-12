import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartCont } from "../../context/CartContext/CartContext";

const ItemDetail = ({ objeto }) => {
  const { addItem } = useContext(CartCont);
  const [contador, setContador] = useState(0);

  return (
    <div className="unProducto">
      <img alt={objeto.description} src={`../../../images/${objeto.imageId}`} />
      <div>
        <h2>{objeto.title}</h2>
        <h3>Cantidad de productos elegidos {contador}</h3>
        <div>Precio: ${objeto.price}</div>
        <div>Stock: {objeto.stock}</div>
        <p>
          Descripción del producto:
          <br />
          {objeto.description}
        </p>
        <ItemCount
          contador={contador}
          valUpgrade={setContador}
          stock={objeto.stock}
        ></ItemCount>
      </div>
      <div>
        <button
          className="agregarCarrito"
          onClick={() => addItem(objeto, contador)}
        >
          Agregar al carrito
        </button>
      </div>
      <div>
        <Link to={`/cart`}>
          <button className="terminarCompra">Terminar mi compra</button>
        </Link>
      </div>
      <div>
        <Link to={`/`}>
          <button className="volver">Volver</button>
        </Link>
      </div>
    </div>
  );
};

export default ItemDetail;
