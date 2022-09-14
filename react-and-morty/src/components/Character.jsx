import React from "react";
import { useState } from "react";
import { useEffect } from "react";

export default function CharacterListing({ charlist }) {
  const [characterList, setCharacterList] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [showMoreId, setShowMoreId] = useState(null);
  console.log(showMoreId);

  useEffect(() => {
    if (charlist.results === undefined) {
      setCharacterList(false);
    } else {
      setCharacterList(true);
    }
  });
  function showToggle(char) {}

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
              setShowMoreId(char.id);
            }}
          >
            {!showMore ? (
              <div>
                <img src={char.image} />
                <br />
                <span>Name: {char.name}</span>
                <br />
                <span>Species: {char.species}</span>
                <br />
              </div>
            ) : (
              <div>
                <img src={char.image} />
                <br />
                <span>Name: {char.name}</span>
                <br />
                <span>Species: {char.species}</span>
                <br />
                <span>Gender: {char.gender}</span>
                <br />
                <span>Status: {char.status}</span>
                <br />
                <span>Origin: {char.origin.name}</span>
                <br />
              </div>
            )}
          </div>
        ))}
      </div>
    );
  }
}
