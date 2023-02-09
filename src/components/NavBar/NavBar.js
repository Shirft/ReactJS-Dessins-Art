import '../NavBar/navbar.css';
import CartWidget from '../CartWidget/CartWidget';
import { NavLink, Link } from 'react-router-dom';

const NavBar = () => {
    
  return (
    <nav>
        <img alt="logo" src="../../images/logo.png" />
        <ul>
            <li>
                <NavLink to="/" >Inicio</NavLink>
            </li>
            <li >
                <NavLink to="/category/Mates" >Mates</NavLink>
            </li>
            <li >
                <NavLink to="/category/Cuadros" >Cuadros</NavLink>
            </li>
        </ul>
        <Link to='/cart'>
            <CartWidget></CartWidget>
        </Link>
    </nav>
  )
}

export default NavBar