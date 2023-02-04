import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import { useState } from 'react';

const ItemDetail = ({objeto}) => {
  const stock=10;
  const [contador, setContador]=useState(1);

  return (
    <div className="unProducto">
        <img alt={objeto.description} src={objeto.pictureUrl}/>
        <div>
            <h2>{objeto.title}</h2>
            <h3>Cantidad de productos elegidos {contador}</h3>
            <div>
                Precio: ${objeto.price}
            </div>
            <div>
                Stock: {stock}
            </div>
            <p>
                Descripción del producto:
                <br/>
                {objeto.description}
            </p>
            <ItemCount contador={contador} valUpgrade={setContador} stock={stock}></ItemCount>
        </div>
    </div>
  )
}

export default ItemDetail