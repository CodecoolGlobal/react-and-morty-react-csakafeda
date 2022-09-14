import { useState } from "react";

export default function Locationinfo({loclist}){
    const [showMore, setShowMore] = useState(false);
    const [currentLoc, setCurrentLoc] = useState(null)
return(
    <div
onClick={() => {
    setShowMore(!showMore);
    setCurrentLoc(loclist.id)
  }}
>
  {!showMore ? (
    <div>
      <span>{loclist.name}</span>
    </div>
  ) : (
      <div> 
       
      <span>{loclist.name}</span><br></br>
      <span>{loclist.type}</span><br></br>
      <span>{loclist.dimension}</span><br></br>
    </div>
  )}
    </div>
 )}