import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import ShoppingCart from './layouts/shoppingCart';
import NavBar from './components/navBar';
import AllCardsList from './layouts/AllCardsList';
import Login from './layouts/login';
import Registration from './layouts/registration';

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        {' '}
        <Route path='/login' component={Login} />
        <Route path='/registration' exact component={Registration} />
        <Route path='/shoppingCart/:shopCartId?' component={ShoppingCart} />
        <Route path='/:cardId?' exact component={AllCardsList} />
        <Redirect to='/' />
      </Switch>
    </div>
  );
}

export default App;
