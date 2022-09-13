import React from "react";
import { useState } from "react";
import { useFetch } from "../api/useFetch";
import { useEffect } from "react";

export default function CharacterListing({ charlist }) {
  const [characterList, setCharacterList] = useState(false);
  const [currentCharacter, setCurrentCharacter] = useState("");

  useEffect(() => {
    if (charlist.results === undefined) {
      setCharacterList(false);
    } else {
      setCharacterList(true);
    }
  });


  function showCharacterInfo(char) {
    console.log(char);

    // return (
    //   <ul>
    //     {char.name}
    //     <img src={char.image} />
    //     <li>{char.gender}</li>
    //     <li>{char.status}</li>
    //     <li>{char.species}</li>
    //     <li>{char.status}</li>
    //   </ul>
    // );
  }

  const charactersArray = charlist.results;
  if (characterList) {
    return (
      <div className="char-list">
        {charactersArray.map((char) => (
          <div
            className="cards"
            key={char.id}
            id={char.id}
            onClick={() => showCharacterInfo(char)}
          >
            <img src={char.image} />
            {char.name}
          </div>
        ))}
      </div>
    );
  }
}
