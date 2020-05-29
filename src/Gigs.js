import React, { useEffect, useState } from "react";
import Gig from "./Gig.js"
import GigDetail from "./GigDetail.js"
import { List, Rail, Segment, Grid, Container} from 'semantic-ui-react'

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

  const gigListItems = gigs.map(gig => <Gig gig={gig} 
                                            key={gig.id} 
                                            onClick={chooseGig} />)

  return (
    <Grid centered columns={2}>
      <Grid.Column>
        <Rail dividing position="left">
            <List>
              {gigListItems}
            </List>
        </Rail>
      <GigDetail gig={selectedGig} />
      </Grid.Column>
    </Grid>
  );
}
 
export default Gigs;