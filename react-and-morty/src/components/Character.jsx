import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Characterinfo from "./CharacterInfo";


export default function CharacterListing({ charlist }) {
  const [characterList, setCharacterList] = useState(false);
  // const [search, setSearch] = useState("");
  useEffect(() => {
    if (charlist.results === undefined) {
      setCharacterList(false);
    } else {
      setCharacterList(true);
    }
  }, []);

  const charactersArray = charlist.results;
  if (characterList) {
    return (
      <div className="char-list">
        {/* <input
          type="text"
          // onChange={(text) => {
          //   console.log(text.target.value);
          // }}
        ></input> */}
        {charactersArray.map((char) => (
          <div className="cards" key={char.id} id={char.id}>
            <Characterinfo charlist={char} />
          </div>
        ))}
      </div>
    );
  }
}
