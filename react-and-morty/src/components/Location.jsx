import React from "react";
import { useState } from "react";

import { useEffect } from "react";

import Locationinfo from "./Locationinfo";

export default function LocationListing({ loclist}) {
  const [locationList, setLocationList] = useState(false);


  useEffect(() => {
    if (loclist.results === undefined) {
      setLocationList(false);
    } else {
      setLocationList(true);
    }
  },[]);

/*
 useEffect(() => {
    if (loclist.results === undefined) {
      setLocationList(false);
    } else {
      setLocationList(true);
    }
  },[]);
  
for(let i, i<loclist, i++){}

}

*/
  const locationsArray = loclist.results;
  if (locationList) {
    return (
      <div className="location-list">
        {locationsArray.map((loclist) => {
          console.log(loclist);
          return(
          <div
            className="cards"
            key={loclist.id}
            index={loclist.id}
            >
           <Locationinfo loclist={loclist}/>
          </div>
        )})}
      </div>
    );
  }
}
