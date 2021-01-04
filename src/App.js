import ItemListContainer from './containers/ItemListContainer/ItemListContainer';
import Navbar from './components/Navbar/Navbar';
import ItemCount from './components/ItemCount/ItemCount';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer
        greeting="Saludos" />
      {/* <ItemCount stock={10} initial={1} /> */}
    </div>
  );
}

export default App;
