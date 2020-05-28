import React, { useEffect, useState } from "react";
import Song from "./Song.js"
import { List } from 'semantic-ui-react'

let Songs = () => {
  let [songs, changeSongs] = useState([])

  useEffect(() => {
    let mounted = true
    fetch("http://localhost:3001/songs")
      .then(mounted ? r => r.json() : null)
      .then(mounted ? songs => { changeSongs(songs) } : null)
    return () => mounted = false
  }, []);

  const songListItems = songs.map(song => <Song song={song} key={song.id}/>)

    return (
      <List>
        {songListItems}
      </List>
    );
}
 
export default Songs;