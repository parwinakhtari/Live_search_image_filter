import "./styles.css";
import React, { useState } from 'react';
import Sresult from './Sresult';

export default function Search() {
 const[img, setImg] = useState('');
 const InputEvent=(event)=>{
setImg(event.target.value);

 }
   return (
    <div className="searchbar">
<input  type='text' placeholder='Search anything' value={img} onChange={InputEvent} />
{img=== "" ? null :<Sresult name={img} />   }
    </div>
  );
}