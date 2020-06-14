import React, { useEffect, useState } from "react";
import Gig from "./Gig.js"
import GigDetail from "./GigDetail.js"
import { List, Grid } from 'semantic-ui-react'

let Gigs = () => {
  let [gigs, changeGigs] = useState([])
  let [selectedGig, changeSelectedGig] = useState(null)
  
  
  useEffect(() => {
    let mounted = true
    fetch("http://localhost:3001/gigs")
      .then(mounted ? r => r.json() : null)
      .then(mounted ? gigs => { changeGigs(gigs) } : null)
    return () => mounted = false
  }, []);

  let chooseGig = (gig) => {
    changeSelectedGig(gig)
  }

  let editGig = () => {
    debugger
    console.log(selectedGig)
  }

  const gigListItems = gigs.map(gig => <Gig gig={gig} 
                                            key={gig.id} 
                                            onClick={chooseGig} />)

  return (
    <Grid columns={2} divided style={{height: '100vh'}}>
        <Grid.Column width={4} >
            <List>
              {gigListItems}
            </List>
        </Grid.Column>
      <Grid.Column width={12} >
        <GigDetail 
          gig={selectedGig} 
          key={selectedGig ? selectedGig.attendance : null}
          changeGig={changeSelectedGig}
          editGig={editGig} />
      </Grid.Column>
    </Grid>
  );
}
 
export default Gigs;