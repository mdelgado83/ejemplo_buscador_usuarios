import { useState } from "react";
import "./App.css";
import Header from "./Header";
import Resultados from "./Resultatos";
import { mock1 } from "./constants/users";
import CONFIG from "./config/config";

function App() {
  const [query, setQuery] = useState("");
  const [resultado, setResultado] = useState(null);

  const callServer = async function (todos) {
    console.log("CLIK");
    if (CONFIG.use_server) {
      try {
        let queryParams;
        if (todos === true) {
          queryParams = "?limt=" + CONFIG.num_items;
        } else {
          queryParams = "/search?q=" + query;
        }
        const response = await fetch(`${CONFIG.server_url}${queryParams}`);
        const data = await response.json();
        console.log(data);
        setResultado(data.users);
      } catch (error) {
        console.log(error);
      }
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
      <button id="butonsearch" onClick={() => callServer(false)}>
        Buscar
      </button>
      <button id="butonAll" onClick={() => callServer(true)}>
        Buscar Todos
      </button>

      {resultado && <Resultados resultado={resultado} />}
    </div>
  );
}

export default App;
