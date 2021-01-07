import ItemListContainer from './containers/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter as Router, Switch, Route, useLocation, Link } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import ItemCount from './components/ItemCount/ItemCount';
import NoMatch from './components/NoMatch';


function App() {


  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <ItemListContainer greeting="Saludos" />
          </Route>
          <Route path="/category/:id">
            <ItemListContainer />
          </Route>
          <Route path="/item/:id">
            <ItemDetailContainer />
          </Route>
          <Route >
            <NoMatch />
          </Route>
        </Switch>
      </div>
      {/* <ItemCount stock={10} initial={1} /> */}
    </Router>
  );
}

export default App;

