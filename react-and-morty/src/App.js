import React, { useState } from "react";
import "./App.css";
import { useCharacters, useLocations } from "./api/useData";
import LocationList from "./components/Location";
import Navigation from "./components/Navigation";
import CharacterList from "./components/Character";
import logo from "./components/IMG_0042.jpg";
import Pagination from "./components/Pagination";

function App() {
  const [selected, setSelected] = useState("");
  const [pageNum, setPageNum] = useState(1);
  // const [defaultPage, setDefaultPage ] = useState(1)

  const characters = useCharacters(pageNum);
  const locations = useLocations(pageNum);

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
      <Pagination
        className="pagination"
        nPages={selected === "ch" ? 42 : selected === "lc" ? 7 : 0}
        currentPage={pageNum}
        setCurrentPage={setPageNum}
      />
      {selected === "" ? (
        <div className="starting-info">
          Hello! There is some infos for really big Rick and Morty fans
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
