import React, { useState } from "react";
import "./App.css";
import { useCharacters, useLocations } from "./api/useData";
import LocationList from "./components/Location";
import Navigation from "./components/Navigation";
import CharacterList from "./components/Character";
import logo from "./components/IMG_0042.jpg";
import pic from "./components/Realistic-Krombopulos-Michael-by-Connor-Gartland.webp";
import pic2 from "./components/shitter.jpeg";
import Pagination from "./components/Pagination";

function App() {
  const [selected, setSelected] = useState("");
  const [charPageNum, setCharPageNum] = useState(1);
  const [locPageNum, setLocPageNum] = useState(1);

  const characters = useCharacters(charPageNum);
  const locations = useLocations(locPageNum);

  return (
    <div className="App">
      <img className="logo" src={logo} />
      <Navigation
        onNavigate={(where) => {
          setSelected(where);
          setCharPageNum(1);
          setLocPageNum(1);
        }}
      />
      <Pagination
        className="pagination"
        nPages={selected === "ch" ? 42 : selected === "lc" ? 7 : 0}
        currentPage={selected === "ch" ? charPageNum : locPageNum}
        setCurrentPage={selected === "ch" ? setCharPageNum : setLocPageNum}
      />
      {selected === "" ? (
        <div className="starting-info-container">
          <div className="starting-info">
            Hello stranger! This fun website is a location / caracter libary,
            giving you additional information to your favorite
            charaters/locations in every dimension of Rick`n Morty.
          </div>
          <div className="pic-container">
            <img className="bug" src={pic} />
            <img className="sitter" src={pic2} />
          </div>
        </div>
      ) : selected === "ch" ? (
        <div>
          <CharacterList charlist={characters} />
        </div>
      ) : (
        <LocationList loclist={locations} locid={locations.id} />
      )}
    </div>
  );
}

export default App;
