import { useState } from 'react';
import './App.css';
import Header from './Header';
import Resultados from './Resultatos';
import { mock1 } from './constants/users';

function App() {
  const [query, setQuery] = useState("");
  const [resultado,setResultado]=useState(null);

  const callServer = function () {
    console.log("CLIK");
    setResultado(mock1.users);
  }
  return (
    <div  id="main">
      <Header />
      <h2 id="buscador">Buscador de usuario</h2>
      <input type='text' value={query} onChange={e => setQuery(e.target.value)} />
      <button id="butonsearch" onClick={() => callServer()}>Buscar</button>
      {resultado && <Resultados resultado={resultado}/>}
    </div>
  );
}

export default App;
