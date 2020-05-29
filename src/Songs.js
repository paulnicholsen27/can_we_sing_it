import React, { useEffect, useState } from "react";
import Song from "./Song.js"
import { List, Checkbox, Container } from 'semantic-ui-react'

let Songs = () => {
  let [songs, changeSongs] = useState([])

  //  default to true if it's Christmastime!!!
  let [showHoliday, changeShowHoliday] = useState(new Date().getMonth() >= 9) 

  useEffect(() => {
    let mounted = true
    fetch("http://localhost:3001/songs")
      .then(mounted ? r => r.json() : null)
      .then(mounted ? songs => { changeSongs(songs) } : null)
    return () => mounted = false
  }, []);

  const getSongListItems = songs.map(song => <Song song={song} key={song.id} showHolidaySongs={showHoliday}/>)

  let toggleHoliday = () => {changeShowHoliday(current => !current)}

    return (
      <Container>
        <Checkbox label='Include Holiday Songs?' onClick={toggleHoliday} checked={showHoliday} />
        <List>
          {getSongListItems}
        </List>
      </Container>
    );
}
 
export default Songs;