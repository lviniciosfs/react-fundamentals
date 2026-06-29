export default function Button() {

  function trigger(event: any){
    alert('triggered '+ event.target.tagName)
  }

  
  return (
    <button onClick={trigger}>here</button>
  )

}