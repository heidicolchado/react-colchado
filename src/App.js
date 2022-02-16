import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemCount from './components/ItemCount/ItemCount.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar />

      <h1>Counter 1</h1>
      <ItemCount stock = "10"/>
      <ItemListContainer/> 
      
    </div>
  );
}

export default App;

