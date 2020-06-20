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

  let editGig = (event) => {
    let data = {start_time: new Date(event.target.elements["date"].value),
                name: event.target.elements["name"].value,
                notes: event.target.elements["notes"].value}
    updateGig(data)
  }

  let toggleCheckBox = (event, checkboxType) => {
    let toggledItem = event.target.textContent
    let attribute = checkboxType === "song" ? "title" : "name"
    let record = selectedGig[`${checkboxType}s`].find(
      record => record[checkboxType][attribute] === toggledItem)
    record.included = !record.included
    let gigCopy = {...selectedGig}
    changeSelectedGig(gigCopy)
  }


  let saveList = () => { 
      let songIds = selectedGig.songs
        .filter(record => record.included)
        .map(record => record.song.id)
      let singerIds = selectedGig.singers
        .filter(record => record.included)
        .map(record => record.singer.id)
      updateGig({song_ids: songIds, singer_ids: singerIds})
  }

  let updateGig = (data) => {
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
          key={selectedGig ? selectedGig.singers : null}
          editGig={editGig}
          toggleCheckBox={toggleCheckBox}
          onSave={saveList} />
      </Grid.Column>
    </Grid>
  );
}
 
export default GigPage;