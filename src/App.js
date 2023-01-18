import React from 'react'
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './pages/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './pages/ItemListContainer/ItemDetailContainer/ItemDetailContainer';


function App() {
  const navItem="nav-item";
  const saludo="Hola Mundo!"
  const navList="nav-list";
  return (
    <div className="App">
      <header className="App-header">
        <NavBar clase2={navList} clase={navItem}></NavBar>
      </header>
      <section>
        <ItemListContainer greeting={saludo}></ItemListContainer>
        <ItemDetailContainer ></ItemDetailContainer>
      </section>
    </div>
  );
}

export default App;
