import { CartCont } from "../CartContext/CartContext";
import { useState } from "react";

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const addItem = (item, quantity) => {
    const newProduct = {
      id: item.id,
      title: item.title,
      price: item.price,
      quantity: quantity,
      category: item.category,
      total: (item.price*quantity),
    };
    setCart([...cart, newProduct]);
  };
  const clear=()=>{
    setCart([])
  };
  return (
    <CartCont.Provider value={{ cart, addItem }}>{children}</CartCont.Provider>
  );
};

export default CartProvider;
