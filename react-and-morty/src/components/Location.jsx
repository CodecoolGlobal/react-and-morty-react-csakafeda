import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Locationinfo from "./Locationinfo";
import "./locations.css"
export default function LocationListing({ loclist }) {
  const [locationList, setLocationList] = useState(false);

  useEffect(() => {
    if (loclist.results === undefined) {
      setLocationList(false);
    } else {
      setLocationList(true);
    }
  }, []);

  const locationsArray = loclist.results;
  if (locationList) {
    return (
      <div className="location-list">
        {locationsArray.map((loclist) => {
          return (
            <div className="card" key={loclist.id} index={loclist.id}>
              <Locationinfo loclist={loclist} />
            </div>
          );
        })}
      </div>
    );
  }
}
