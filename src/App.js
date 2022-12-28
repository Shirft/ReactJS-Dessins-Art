import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';


function App() {
  const navItem="nav-item";
  const saludo="Hola Mundo!"
  const navList="nav-list";
  return (
    <div className="App">
      <header className="App-header">
        <NavBar clase2={navList} clase={navItem}></NavBar>
        <ItemListContainer greeting={saludo}></ItemListContainer>
      </header>
    </div>
  );
}

export default App;
