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
      <FunkcionalaIezime />
      <Lietotajstasts />
      <Scenariji />
      <RubikaKubs />
      <HappyPath />
    </div>
  );
}

export default App;