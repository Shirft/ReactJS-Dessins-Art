import Item from "../Item/Item";
import "./ItemList.css";

const ItemList = ({ productos, greeting }) => {
  return (
    <>
      <h1>{greeting}</h1>
      <ul className="listProducts">
        {productos.map((producto) => (
          <Item key={producto.id} producto={producto} />
        ))}
      </ul>
    </>
  );
};

export default ItemList;
