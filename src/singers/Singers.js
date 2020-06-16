import React, { useEffect, useState } from "react";
import Singer from "./Singer.js"
import { List } from 'semantic-ui-react'

let Singers = () => {
  let [singers, changeSingers] = useState([])

  useEffect(() => {
    let mounted = true
    fetch("http://localhost:3001/singers")
      .then(mounted ? r => r.json() : null)
      .then(mounted ? singers => { changeSingers(singers) } : null)
    return () => mounted = false
  }, []);

  const singerListItems = singers.map(singer => <Singer singer={singer} key={singer.id}/>)

    return (
      <List>
        {singerListItems}
      </List>
    );
}
 
export default Singers;