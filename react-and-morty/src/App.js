import React, { useState } from "react";
import "./App.css";
import { useCharacters, useLocations } from "./api/useData";
import Main from "./components/main";
import { useFetch } from "./api/useFetch";
import { useEffect } from "react";

function App() {
  const [char, setChar] = useState(false);

  const characters = useCharacters(1);
  const locations = useLocations(1);

  useEffect(()=>{
    if (characters === "Loading...") {
      setChar(false);
    } else {
      setChar(true);
    }
  })
  console.log("Characters data: ");
  console.log(characters);
  // console.log("Locations data: ");
  // console.log(locations);

  return (
    <div className="App">
      <div className="logo">----------Logo----------</div>
      <button className="char-button">Characters</button>
      <button className="location-button">Locations</button>
      <div className="basic info">Hello! There is some infos for really big Rick and Morty fans</div>
      
      {/* {char ? (characters.results.map((char) => (<div className="cards" key={characters.result.name}>
      {char.name}
      </div>))) : (<div>{"valami"}</div>)} */}
      
      
    </div>
  );
}

export default App;