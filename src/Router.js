import React from 'react';
import {Switch,Route} from 'react-router-dom';
import HomePage from './pages/homepage';
import CartPage from './pages/cartpage';
const Router = () => (
  <Switch>
  {/*ruta por default con forward slash*/}
  <Route exact path='/' component={HomePage} />
  <Route exact path='/cart' component={CartPage} />
  </Switch>
);

export default Router;