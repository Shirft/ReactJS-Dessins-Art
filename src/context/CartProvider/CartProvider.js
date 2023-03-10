import { CartCont } from "../CartContext/CartContext";
import { useState } from "react";
import Swal from "sweetalert2";
import "./CartProvider.css";

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    let newCart;
    if (quantity > 0) {
      if (isInCart(item.id)) {
        const repetido = cart.find((i) => i.id == item.id);
        repetido.quantity += quantity;
        repetido.total = item.price * repetido.quantity;
        Swal.fire("Producto agregado al carrito");
        if (repetido.quantity > repetido.stock) {
          Swal.fire("La cantidad de items superan el stock disponible");
          repetido.quantity -= quantity;
          repetido.total = item.price * repetido.quantity;
        }
        
        newCart = [...cart];
      } else {
        const newProduct = {
          id: item.id,
          title: item.title,
          price: item.price,
          quantity: quantity,
          categoryId: item.categoryId,
          total: item.price * quantity,
          stock: item.stock,
        };
        Swal.fire("Producto agregado al carrito");
        newCart = [...cart, newProduct];
      }
      setCart(newCart);
    } else {
      Swal.fire("No se agregaron productos al carrito");
    }
  };

  const clear = () => {
    setCart([]);
  };

  const removeItem = (itemId) => {
    setCart(cart.filter((item) => item.id != itemId));
  };

  const isInCart = (id) => {
    return cart.some((items) => items.id == id);
  };

  return (
    <CartCont.Provider value={{ cart, addItem, clear, removeItem }}>
      {children}
    </CartCont.Provider>
  );
};

export default CartProvider;
