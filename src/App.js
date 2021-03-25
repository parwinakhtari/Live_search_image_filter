import "./styles.css";
import React from 'react';
import { Route, Link, Switch } from "react-router-dom";
import About from './About';
import Contact from './Contact';
import Menu from './Menu';
import Services from './Services' ;
import User from './User' ;
import Search from './Search' ;
import Error from './Error';

export default function App() {
  return (
    <>
    <Menu/>
<Switch>
<Route exact path='/' component={About} />
<Route exact path='/contact' component={Contact} />
<Route exact path='/services' component={Services} />
<Route exact path='/user' component={User} />
<Route path='/user/:name' component={User} />
<Route exact path='/search' component={Search} />
<Route component={Error} />
</Switch>
    </>
  );
}

