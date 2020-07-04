import React, { useEffect, useState } from "react";
import ListItem from "shared/ListItem.js"
import GigDetail from "./GigDetail.js"
import { List, Grid } from 'semantic-ui-react'
import GigModal from "./GigModal.js"

let GigPage = () => {
  let [gigs, changeGigs] = useState([])
  let [selectedGig, changeSelectedGig] = useState(null)
  let [newGig, changeNewGig] = useState({
    start_time: new Date().toDateString(),
    notes: null,
    name: null,
    id: null
  })

  let [gigCopy, changeGigCopy] = useState({
    ...selectedGig
  })

  useEffect(() => {
    let mounted = true
    fetch("http://localhost:3001/gigs")
      .then(mounted ? r => r.json() : null)
      .then(mounted ? gigs => { changeGigs(gigs) } : null)
    return () => mounted = false
  }, []);

  let chooseGig = (event) => {
    let name = event.target.textContent
    let gig = gigs.find( (gig) => gig.name === name) // TODO are names unique?  prob not
    changeSelectedGig(gig)
    changeGigCopy(gig)
  }

  let handleChange = (event, {name, value}) => {
    changeNewGig((prevGig) => {
      return {...prevGig, [name]: value}
    }
  )}

  let handleChangeEditModal = (event, {name, value}) => {
    changeGigCopy((prevGig) => {
      return {...prevGig, [name]: value}
    }
  )}

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
      processGigForm({song_ids: songIds, singer_ids: singerIds, id: selectedGig.id})
  }

  let processGigForm = (event) => {
      let data
      const baseUrl = "http://localhost:3001/gigs"
      let url = ""
      let method = ""
      if (event.target.elements.id.value) {
          data = gigCopy
          url = baseUrl + `/${data.id}`
          method = "PATCH"
      } else {
          data = newGig
          url = baseUrl
          method = "POST"
      }
      fetch(url, {
          method: method,
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
      }).then(r => r.json())
      .then(
          gig => {
              let gigToUpdateIndex = gigs.findIndex(oldGig => oldGig.id === gig.id)
              let newGigs = [...gigs]
              if (gigToUpdateIndex === -1) {
                newGigs.push(gig)
              } else {
                newGigs[gigToUpdateIndex] = gig
              }
              changeGigs(newGigs)
              changeSelectedGig(gig)
              changeNewGig({})
              changeGigCopy({})
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
            <GigModal 
              handleSubmit={processGigForm}
              handleChange={handleChange}
              gig={newGig}
              triggerText={"Add a Gig"}
              submitText={"Create Gig"} />
            </Grid.Column>
      <Grid.Column width={12} >
        <GigDetail 
          gig={selectedGig} 
          key={selectedGig ? selectedGig.singers : null}
          editGig={processGigForm}
          gigCopy={gigCopy}
          handleChangeEditModal={handleChangeEditModal}
          toggleCheckBox={toggleCheckBox}
          onSave={saveList} />
      </Grid.Column>
    </Grid>
  );
}
 
export default GigPage;