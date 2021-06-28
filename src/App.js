import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Category from './Pages/Category';
import CheckOut from './Pages/CheckOut';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <div className="App">
      <CartProvider>
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
      </CartProvider>
    </div>
  );
}

export default App;
