import '../NavBar/navbar.css';
import CartWidget from '../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom';

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
                <NavLink to="/category/Cuadro" >Cuadros</NavLink>
            </li>
        </ul>
        <CartWidget></CartWidget>
    </nav>
  )
}

export default NavBar