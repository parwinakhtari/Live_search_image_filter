import "./styles.css";
import React from 'react';
import { useLocation, useParams } from "react-router-dom";

export default function User() {
  const {name}  =useParams();
  const location=useLocation();
  return (
    <div className="App">
<h1> Hi i am User {name} page</h1>
my current location is {location.pathname}
<br/>
{location.pathname===`/user/pari`? (<button>Hi</button>): null }
    </div>
  );
}