import "./styles.css";
import React from 'react';
import { NavLink } from "react-router-dom";

export default function Error() {
  return (
    <div className="App">
<h1> 404 Error page</h1>
<p> Sorry, this page not available</p>
<NavLink to="/"> Go Back </NavLink>
    </div>
  );
}