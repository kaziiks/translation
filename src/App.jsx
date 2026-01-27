import React from 'react';
import Translations from './Translations';
import FunkcionalaIezime from "./components/FunkcionalaIezime";
import Lietotajstasts from "./components/Lietotajstasts";
import Scenariji from "./components/Scenariji";
import RubikaKubs from "./components/RubikaKubs";
import HappyPath from "./components/HappyPath";

function App() {
  return (
    <div>
      <h1>Programmatūras testēšanas vārdnīca</h1>
      <Translations />
    </div>
  );
  
   return (
    <main style={{ maxWidth: "800px", margin: "0 auto", fontFamily: "Arial" }}>
      <h1>Funkcionālo iezīmju veidošana</h1>

      <FunkcionalaIezime />
      <Lietotajstasts />
      <Scenariji />
      <RubikaKubs />
      <HappyPath />
    </main>
}

export default App;