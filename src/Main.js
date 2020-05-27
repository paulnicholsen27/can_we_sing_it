import React, { Component } from "react";
import { Container, Menu } from 'semantic-ui-react'
import { Route, NavLink, BrowserRouter } from "react-router-dom";
import Singers from "./Singers"
import Songs from "./Songs"
import Gigs from "./Gigs"

class Main extends Component {
  render() {
    return (
        <BrowserRouter>
          <ul className="header">
            <li><NavLink to="/songs">Songs</NavLink></li>
            <li><NavLink to="/singers">Singers</NavLink></li>
            <li><NavLink to="/gigs">Gigs</NavLink></li>
          </ul>
          <div className="content">
             <Route path="/songs" component={Songs}/>
             <Route path="/singers" component={Singers}/>
             <Route path="/gigs" component={Gigs}/>
          </div>
        </BrowserRouter>
    );
  }
}
 
export default Main;