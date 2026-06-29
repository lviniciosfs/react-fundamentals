import React from "react";

export default function ControlledForm() {

  const [name, setName] = React.useState('Marilia')

  function handleSubmit(event: any){
    event.preventDefault();
    alert(`${name}`)
  }

  return(
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
      <button type="submit">Submit</button>
    </form>
  )
}