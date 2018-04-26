import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';

import NavBar from './component/NavBar/NavBar';
import Home from './component/Home/Home';
import Services from './component/Services/Services';
import Products from './component/Products/Products';
import About from './component/About/About';
import Contact from './component/Contact/Contact';
import Cart from './component/Cart/Cart';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <Switch>
                    <Route component={Home} exact path='/'/>
                    <Route component={Services} path='/Services'/>
                    <Route component={Products} path='/Products'/>
                    <Route component={About} path='/About'/>
                    <Route component={Contact} path='/Contact'/>
                    <Route component={Cart} path='/Shopping_Cart'/>
        </Switch>
      </div>
    );
  }
}
