import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Category from './Pages/Category';
import CheckOut from './Pages/CheckOut';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/categories/:id">
          <Category />
        </Route>
        <Route exact path="/checkout">
          <CheckOut />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
