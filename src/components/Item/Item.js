import './Item.css';
import { Link } from "react-router-dom";

const Item = ({producto}) => {
  return(
    <Link to={`/item/${producto.id}`} className='productos'>
      <h3>{producto.title}</h3>
      <img alt={producto.description} src={`../../../images/${producto.imageId}`}/>
      <p>{producto.description}</p>
    </Link>
  ); 
};

export default Item