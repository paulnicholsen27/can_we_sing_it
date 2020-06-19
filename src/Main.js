import React from "react";
import { Container, Menu } from 'semantic-ui-react'
import { Route, BrowserRouter, Link } from "react-router-dom";
import Singers from "./singers/Singers"
import Songs from "./songs/Songs"
import Gigs from "./gigs/GigPage"

let Main = () => {
  let colors = {
    cyan: 'E0FBFC',
    green: '06D6AO',
    blue: '118AB2',
    black: '073B4C',
    ruby: 'D81E5B'
  }

    return (
          <BrowserRouter>
            <Menu className="header">
              <Menu.Item name="Songs" as={Link} to="/songs" />
              <Menu.Item name="Singers" as={Link} to="/singers" />
              <Menu.Item name="Gigs" as={Link} to="/gigs" />
            </Menu>
            <Container className="content">
               <Route path="/songs" component={Songs}/>
               <Route path="/singers" component={Singers}/>
               <Route path="/gigs" component={Gigs}/>
            </Container>
          </BrowserRouter>
    );
}
 
export default Main;