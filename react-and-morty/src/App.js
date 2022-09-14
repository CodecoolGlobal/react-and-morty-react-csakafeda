import React, { useState } from "react";
import "./App.css";
import { useCharacters, useLocations } from "./api/useData";
import LocationList from "./components/Location";
import { useEffect } from "react";
import Navigation from "./components/Navigation";
import CharacterList from "./components/Character";
import logo from "./components/rnm.jpg";

function App() {
  const [selected, setSelected] = useState("");

  const characters = useCharacters(1);
  const locations = useLocations(1);

  // console.log("Characters data: ");
  // console.log(characters);
  // console.log("Locations data: ");
  // console.log(locations);

  return (
    <div className="App">
      <img className="logo" src={logo} />
      <Navigation
        onNavigate={(where) => {
          setSelected(where);
        }}
      />
      {selected === "" ? (
        <div className="starting-info">
          Hello! There is some infos for really big Rick and Morty fans
        </div>
      ) : selected === "ch" ? (
        <CharacterList charlist={characters} />
      ) :  (
        <LocationList loclist={locations} />
      )
}
    </div>
  );
}

export default App;
