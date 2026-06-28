import React from 'react'; // Adicione esta linha no topo do ficheiro

export default function NumberList() {
  const numbers = [1,2,3,4,5]

  const listItems = numbers.map(i => 
    <li key={i}>
      Number: {i}
    </li>
  )

  return (
    <ul>{listItems}</ul>
  )
}

