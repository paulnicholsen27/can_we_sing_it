import React, { useEffect, useState } from "react";
import Gig from "./Gig.js"
import { List } from 'semantic-ui-react'

let Gigs = () => {
  let [gigs, changeGigs] = useState([])

  useEffect(() => {
    let mounted = true
    fetch("http://localhost:3001/gigs")
      .then(mounted ? r => r.json() : null)
      .then(mounted ? gigs => { changeGigs(gigs) } : null)
    return () => mounted = false
  }, []);

  const gigListItems = gigs.map(gig => <Gig gig={gig} key={gig.id}/>)

    return (
      <List>
        {gigListItems}
      </List>
    );
}
 
export default Gigs;