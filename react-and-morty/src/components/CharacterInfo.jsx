import { useState } from "react";

export default function Characterinfo({ charlist }) {
  const [showMore, setShowMore] = useState(false);
  const [currentChar, setCurrentChar] = useState(null);
  return (
    <div
      onClick={() => {
        setShowMore(!showMore);
        setCurrentChar(charlist.id);
      }}
    >
      {!showMore ? (
        <div>
          <img src={charlist.image} />
          <br />
          <span>Name: {charlist.name}</span>
          <br />
          <span>Species: {charlist.species}</span>
          <br />
        </div>
      ) : (
        <div>
          <img src={charlist.image} />
          <br />
          <span>Name: {charlist.name}</span>
          <br />
          <span>Species: {charlist.species}</span>
          <br />
          <span>Gender: {charlist.gender}</span>
          <br />
          <span>Status: {charlist.status}</span>
          <br />
          <span>Origin: {charlist.origin.name}</span>
          <br />
          <span>Location: {charlist.location.name}</span>
          <br />
        </div>
      )}
    </div>
  );
}
