import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './pages/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer';
import Error from './pages/Error/Error';
import Cart from './pages/Cart/Cart';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import CartProvider from './context/CartProvider/CartProvider';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <NavBar/>
          </header>
          <Routes>
              <Route path="/" element={<ItemListContainer/>}/>
              <Route path="/*" element={<Error/>}/>
              <Route path="/category/:category" element={<ItemListContainer/>}/>
              <Route path="/item/:id" element={<ItemDetailContainer/>}/>
              <Route path="/category/:category/item/:id" element={<ItemDetailContainer/>}/>
              <Route path="/cart" element={<Cart/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
