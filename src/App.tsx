import React from 'react'; // Adicione esta linha no topo do ficheiro
import { createElement } from 'react';

function Greeting({name}){
  return createElement(
    'p',
    null,
    'Hello',
    createElement('i', null, name)
  )
}

export default function App() {
  return createElement(
    Greeting,
    { name: 'Taylor' }
  );
}
