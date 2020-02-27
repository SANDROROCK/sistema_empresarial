import React from 'react';

import  './syles.css';

export default function Chamada(props) {
  return (
    <div className="chamada">
        <div id='box-chamada'>
        <h1>{props.title}</h1>

        </div>
    </div>
  );
}
