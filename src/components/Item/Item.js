import './Item.css';
import { Link } from "react-router-dom";

const Item = ({producto}) => {
  return(
    <Link to={`Item/${producto.id}`} className='productos'>
      <h3>{producto.title}</h3>
      <img alt={producto.description} src={producto.pictureUrl}/>
      <p>{producto.description}</p>
    </Link>
  ); 
};

export default Item