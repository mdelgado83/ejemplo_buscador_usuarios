import { useState } from "react";
import "./App.css";
import Header from "./Header";
import Resultados from "./Resultatos";
import { mock1 } from "./constants/users";
import CONFIG from "./config/config";

function App() {
  const [query, setQuery] = useState("");
  const [resultado, setResultado] = useState(null);

  const callServer = async function () {
    console.log("CLIK");
    if (CONFIG.use_server) {
      const response = await fetch(CONFIG.server_url);
      const data = await response.json();
      console.log(data);
      setResultado(data.users);
    } else {
      setResultado(mock1.users);
    }
  };
  return (
    <div id="main">
      <Header />
      <h2 id="buscador">Buscador de usuario</h2>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button id="butonsearch" onClick={() => callServer()}>
        Buscar
      </button>
      {resultado && <Resultados resultado={resultado} />}
    </div>
  );
}

export default App;
