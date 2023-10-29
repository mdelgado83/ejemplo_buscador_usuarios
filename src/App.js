import { useState } from 'react';
import './App.css';
import Header from './Header';

function App() {
  const [query, setQuery] = useState("");
  const callServer = function () {
    console.log("CLIK");
  }
  return (
    <div className="App">
      <Header />
      <h2 id="buscador">Buscador de usuario</h2>
      <input type='text' value={query} onChange={e => setQuery(e.target.value)} />
      <button id="butonsearch" onClick={() => callServer()}>Buscar</button>
    </div>
  );
}

export default App;
