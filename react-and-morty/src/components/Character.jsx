import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Characterinfo from "./CharacterInfo";
import "../loader.css"

export default function CharacterListing({ charlist }) {
  const [characterList, setCharacterList] = useState(false);
  const [imgsLoaded, setImgsLoaded] = useState(false);
  // const [search, setSearch] = useState("");
  const IMAGES = charlist.results.map((a) => a.image);
  // console.log();

  useEffect(() => {
    const loadImage = (image) => {
      return new Promise((resolve, reject) => {
        const loadImg = new Image();
        loadImg.src = image;
        console.log(loadImg);
        loadImg.onload = () =>
          setTimeout(() => {
            resolve(image);
          }, 2000);

        loadImg.onerror = (err) => reject(err);
      });
    };

    Promise.all(IMAGES.map((image) => loadImage(image)))
      .then(() => setImgsLoaded(true))
      .catch((err) => console.log("Failed to load images", err));
  }, []);

  useEffect(() => {
    if (charlist.results === undefined) {
      setCharacterList(false);
    } else {
      setCharacterList(true);
    }
  }, []);

  const charactersArray = charlist.results;
  if (imgsLoaded) {
    return (
      <div className="char-list">
        {/* <input
          type="text"
          onChange={(text) => {
            console.log(text.target.value);
          }}
        ></input> */}
        {charactersArray.map((char) => (
          <div className="cards" key={char.id} id={char.id}>
            <Characterinfo charlist={char} isLoaded={characterList} />
          </div>
        ))}
      </div>
    );
  } else {
    <div className="loader"></div>;
  }
}
