import React, { useState } from 'react'
import { Input, Container, Icon, Header, Grid } from 'semantic-ui-react'
import AttendanceList from "./AttendanceList.js"

let GigDetail = (props) => {
    // let [lockIcon, changeLockIcon] = useState("lock")
    // let [nameFieldEnabled, changeNameFieldEnabled] = useState("disabled")
    // let toggleNameField = (e) => {
    //     changeLockIcon((prevIcon) => {
    //         return prevIcon == "lock" ? "unlock" : "lock"
    //     })
    //     changeNameFieldEnabled((prevState) => {
    //         return prevState == "" ? "disabled" : ""
    //     })
    // }

    // let handleCheckBoxClick = (record) => {
    //     debugger
    //     record.attending = !record.attending
    // }

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
                {/* 
                // <Input value={props.gig.name} disabled={nameFieldEnabled} />
                // <Icon link name={lockIcon} onClick={toggleNameField} />
            */}
                <Grid columns={2} divided style={{height: '100vh'}}>
                    <Grid.Column >
                        <AttendanceList gig={props.gig} />
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