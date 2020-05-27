import React, { Component, useEffect } from "react";

let Singers = () => {

  useEffect(() => {
    fetch("http://localhost:3001/singers")
      .then(r => r.json())
      .then(json => console.log(json))
  })

    return (
      <div>
        <h2>Singers</h2>
        <p>Mauris sem velit, vehicula eget sodales vitae,
        rhoncus eget sapien:</p>
        <ol>
          <li>Nulla pulvinar diam</li>
          <li>Facilisis bibendum</li>
          <li>Vestibulum vulputate</li>
          <li>Eget erat</li>
          <li>Id porttitor</li>
        </ol>
      </div>
    );
}
 
export default Singers;