import React, { useState } from 'react'
import { Input, Container, Icon, Header, Grid } from 'semantic-ui-react'
import AttendanceList from "./AttendanceList.js"

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
                  {props.gig.name} - {getDate()}
                </Header>
                <Grid columns={2} divided style={{height: '100vh'}}>
                    <Grid.Column >
                        <AttendanceList 
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