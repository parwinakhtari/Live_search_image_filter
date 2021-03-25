import "./styles.css";
import React from 'react';


export default function Sresult(props) {
  const imag=`https://source.unsplash.com/300x300/?${props.name}`;
  return (
    <div className="App">
      
<img src={imag} alt='parinot' />
    </div>
  );
}