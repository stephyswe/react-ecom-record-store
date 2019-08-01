import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../Navbar';
import ProductList from '../ProductList';
import Detail from '../Detail';
import Cart from '../Cart';
import PageNotFound from '../PageNotFound';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route path="/detail" component={Detail} />
        <Route path="/cart" component={Cart} />
        <Route component={PageNotFound} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
