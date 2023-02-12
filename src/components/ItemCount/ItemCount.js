import "./ItemCount.css";
import Swal from "sweetalert2";

const ItemCount = ({ contador, valUpgrade, stock }) => {
  const onAdd = () => {
    if (contador == stock) {
      Swal.fire("No hay mas stock del producto seleccionado");
      return;
    }
    valUpgrade(contador + 1);
  };
  const resta = () => {
    if (contador == 0) {
      return;
    }
    valUpgrade(contador - 1);
  };

  return (
    <div className="contador">
      <div className="controles">
        <button onClick={resta}>-</button>
        <span>{contador}</span>
        <button onClick={onAdd}>+</button>
      </div>
    </div>
  );
};

export default ItemCount;
