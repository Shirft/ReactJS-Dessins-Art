import React from 'react'
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './pages/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer';
import Error from './pages/Error/Error';
import Cart from './components/Cart/Cart';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  const saludo="Hola Mundo!"
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <NavBar/>
        </header>
        <Routes>
            <Route path="/" element={<ItemListContainer greeting={saludo}/>}/>
            <Route path="*" element={<Error/>}/>
            <Route path="/category/:category" element={<ItemListContainer greeting={saludo}/>}/>
            <Route path="/item/:id" element={<ItemDetailContainer/>}/>
            <Route path="/category/:category/item/:id" element={<ItemDetailContainer/>}/>
            <Route path="/cart" element={<Cart/>}/>
        </Routes>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
