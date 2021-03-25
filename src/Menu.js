import "./styles.css";
import React from 'react';
import { Route, NavLink } from "react-router-dom";

export default function Menu() {
  return (
    <div className="nav">
<NavLink className='cnt' exact activeClassName='active_class' to='/'>About</NavLink> 

<NavLink className='cnt' activeClassName='active_class' to='/services'>Services</NavLink> 
<NavLink className='cnt' activeClassName='active_class' to='/search'>Search</NavLink> 
<NavLink className='cnt' activeClassName='active_class' to='/user'>User</NavLink> 
<NavLink className='cnt' activeClassName='active_class' to='/contact'>Contact Us</NavLink> 
    </div>
  );
}