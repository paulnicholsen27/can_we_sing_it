import React, { useState } from 'react'
import { Input, Container, Icon, Header, Grid, Button, Modal } from 'semantic-ui-react'
import CheckBoxList from "../shared/CheckBoxList.js"
import EditGigModal from "./EditGigModal.js"

let GigDetail = (props) => {

    let getDate = () => {
        const options = { year: 'numeric', 
                          month: 'long',
                          day: 'numeric' };

        let _ = new Date(props.gig.start_time)
        return _.toLocaleDateString(undefined, options)
    }

    if (props.gig) {
        return (
            <Container>
                <Header as='h3' dividing>
                  <div>{props.gig.name} - {getDate()}</div>
                  <EditGigModal 
                    gig={props.gig}
                    editGig={props.editGig} />


                </Header>
                <Grid columns={2} divided style={{height: '100vh'}}>
                    <Grid.Column >
                        <CheckBoxList 
                            gig={props.gig}
                            key={props.gig.id}
                            changeGig={props.changeGig} />
                    </Grid.Column>
                  <Grid.Column>
                     test
                  </Grid.Column>
                </Grid>
            </Container>
        )
    } else {
        return <Container>Choose a performance or create a new one</Container>
    }
}

export default GigDetail