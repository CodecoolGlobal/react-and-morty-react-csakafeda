import { useState } from "react";
import "./Character.css";

export default function Characterinfo({ charlist }) {
  const [showMore, setShowMore] = useState(false);
  return (
    <div
      className="charactercardfull"
      onClick={() => {
        setShowMore(!showMore);
      }}
    >
      {!showMore ? (
        <div className="basicblock">
          <img className="image" src={charlist.image} />
          <div className="basicinfo">
            <span> Name: {charlist.name} </span>
            <br />
            <span> Species: {charlist.species}</span>
            <br />
          </div>
        </div>
      ) : (
        <div className="infoblock">
          <img className="image" src={charlist.image} />
          <div className="info">
            <br />
            <span> Name: {charlist.name} </span>
            <br />
            <span> Species: {charlist.species} </span>
            <br />
            <span> Gender: {charlist.gender} </span>
            <br />
            <span> Status: {charlist.status} </span>
            <br />
            <span> Origin: {charlist.origin.name} </span>
            <br />
            <span> Location: {charlist.location.name}</span>
            <br />
          </div>
        </div>
      )}
    </div>
  );
}
