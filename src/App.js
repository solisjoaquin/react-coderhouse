import ItemListContainer from './containers/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer';

import Navbar from './components/Navbar/Navbar';
import ItemCount from './components/ItemCount/ItemCount';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer
        greeting="Saludos" />
      {/* <ItemCount stock={10} initial={1} /> */}
      <ItemDetailContainer />
    </div>

  );
}

export default App;
