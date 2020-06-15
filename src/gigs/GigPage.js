import React, { useEffect, useState } from "react";
import ListItem from "shared/ListItem.js"
import GigDetail from "./GigDetail.js"
import { List, Grid } from 'semantic-ui-react'

let GigPage = () => {
  let [gigs, changeGigs] = useState([])
  let [selectedGig, changeSelectedGig] = useState(null)
  
  
  useEffect(() => {
    let mounted = true
    fetch("http://localhost:3001/gigs")
      .then(mounted ? r => r.json() : null)
      .then(mounted ? gigs => { changeGigs(gigs) } : null)
    return () => mounted = false
  }, []);

  let chooseGig = (event) => {
    let name = event.target.textContent
    let gig = gigs.find( (gig) => gig.name === name)
    changeSelectedGig(gig)
  }

  let editGig = () => {
    console.log(selectedGig)
  }

  let toggleAttendance = (event) => {
    let attendee = event.target.textContent
    let attendanceRecord = selectedGig.attendance.find(
      record => record.singer.name === attendee)
    attendanceRecord.attending = !attendanceRecord.attending
    let gigCopy = {...selectedGig}
    changeSelectedGig(gigCopy)
  }

  let saveAttendance = () => { 
      let singerIds = selectedGig.attendance
        .filter(record => record.attending)
        .map(record => record.singer.id)
      let data = {singer_ids: singerIds}
      fetch(`http://localhost:3001/gigs/${selectedGig.id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
      }).then(r => r.json())
      .then(
          gig => {
              let gigToUpdateIndex = gigs.findIndex(oldGig => oldGig.id === gig.id)
              let newGigs = [...gigs]
              newGigs[gigToUpdateIndex] = gig
              changeGigs(newGigs)
              changeSelectedGig(gig)
          }
      )
  }

  const gigListItems = gigs.map(gig => <ListItem content={gig.name} 
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
          editGig={editGig}
          saveAttendance={saveAttendance}
          toggleAttendance={toggleAttendance} />
      </Grid.Column>
    </Grid>
  );
}
 
export default GigPage;