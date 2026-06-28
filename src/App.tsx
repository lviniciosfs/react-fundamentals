interface WeatherInfoProps {
  temperature: number; // Use 'string' se a temperatura vier com a unidade (ex: "25°C")
}

export default function WeatherInfo( {temperature}: WeatherInfoProps) {

  
  let weatherMessage;
  if (temperature > 30) {
    weatherMessage = <p>It's hot outside!</p>;
  } else {
    weatherMessage = <p>It's cold, wear a jacket.</p>;
  }
  
  return (
    <div>
      {weatherMessage}
      
      {/* Method 2: Ternary operator */}
      <p>{temperature > 25 ? 'Too warm' : 'Comfortable'}</p>
      
      {/* Method 3: Logical AND */}
      {temperature > 32 && <p>Warning: Extreme heat!</p>}
    </div>
  );
}
