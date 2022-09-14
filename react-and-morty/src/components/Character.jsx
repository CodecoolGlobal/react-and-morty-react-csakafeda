import React from "react";
import { useState } from "react";
import { useEffect } from "react";

export default function CharacterListing({ charlist }) {
  const [characterList, setCharacterList] = useState(false);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    if (charlist.results === undefined) {
      setCharacterList(false);
    } else {
      setCharacterList(true);
    }
  });

  function showCharacterInfo(char) {
    console.log(char);

    return;
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
            onClick={() => {
              setShowMore(!showMore);
            }}
          >
            {!showMore ? (
              <div>
                <img src={char.image} />
                <span>{char.name}</span>
              </div>
            ) : (
                <div>
                <img src={char.image} />
                <span>{char.name}</span>
                <span>{char.gender}</span>  
              </div>
            )}
            {/* <img src={char.image} />
            {char.name} */}
          </div>
        ))}
      </div>
    );
  }
}
