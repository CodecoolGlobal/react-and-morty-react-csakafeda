import React from "react";
import { useState } from "react";

import { useEffect } from "react";

export default function LocationListing({ loclist }) {
  const [locationList, setLocationList] = useState(false);
  const [currentlocation, setCurrentLocation] = useState("");

  useEffect(() => {
    if (loclist.results === undefined) {
      setLocationList(false);
    } else {
      setLocationList(true);
    }
  },[]);



  const locationsArray = loclist.results;
  if (locationList) {
    return (
      <div className="location-list">
        {locationsArray.map((loclist) => (
          <div
            className="cards"
            key={loclist.id}
            id={loclist.id}
            onClick= {loclist}
          >
            <img src={loclist.image} />
            {loclist.name}
          </div>
        ))}
      </div>
    );
  }
}
