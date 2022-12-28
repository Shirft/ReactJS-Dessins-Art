import '../css/navbar.css';
import logo from '../img/logo.png'
import CartWidget from './CartWidget';

const NavBar = ({clase, clase2}) => {
    
  return (
    <nav>
        <img src={logo} />
        <ul>
            <li className={clase2}>
                <a href="#" className={clase}>Inicio</a>
            </li>
            <li className={clase2}>
                <a href="#" className={clase}>Quienes somos</a>
            </li>
            <li className={clase2}>
                <a href="#" className={clase}>Productos</a>
            </li>
        </ul>
        <CartWidget></CartWidget>
    </nav>
  )
}

export default NavBar