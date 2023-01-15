import '../NavBar/navbar.css';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = ({clase, clase2}) => {
    
  return (
    <nav>
        <img alt="logo" src="./images/logo.png" />
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