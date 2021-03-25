import "./styles.css";
import React from 'react';
import { Route, Link, Switch } from "react-router-dom";
import About from './About';
import Contact from './Contact';
import Menu from './Menu';
import Services from './Services' ;
import User from './User' ;
import Search from './Search' ;

export default function App() {
  return (
    <>
    <Menu/>
<Switch>
<Route exact path='/' component={About} />
<Route path='/contact' component={Contact} />
<Route path='/services' component={Services} />
<Route exact path='/user' component={User} />
<Route path='/user/:name' component={User} />
<Route path='/search' component={Search} />
</Switch>
    </>
  );
}

