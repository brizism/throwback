import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import Throwback from '../components/Throwback';
import About from '../components/About';
import Header from '../components/Header';


const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={Throwback} exact={true} />
        <Route path="/about" component={About} />
      </Switch>
    </div>
  </BrowserRouter>
)


export default AppRouter;