import React, { useState } from 'react'
import { Input, Container, Icon, Header, Grid, Button, Modal } from 'semantic-ui-react'
import CheckBoxList from "shared/CheckBoxList.js"
import CheckBoxListItem from "shared/CheckBoxListItem.js"
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
        const singerListItems = props.gig.singers.map((record) => {
          return ( <CheckBoxListItem
              onChange={(event) => props.toggleCheckBox(event, "singer")}
              checked={record.included} 
              key={record.singer.id}
              label={record.singer.name}/> )
      })

        const songListItems = props.gig.songs.map((record) => {
          return ( <CheckBoxListItem
              onChange={(event) => props.toggleCheckBox(event, "song")}
              checked={record.included} 
              key={record.song.id}
              label={record.song.title}/> )
      })

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
                            title={"Attendance"}
                            onSave={() => props.onSave("singer")}
                            listItems={singerListItems}/>
                    </Grid.Column>
                    <Grid.Column>
                        <CheckBoxList
                            title={"Set List"}
                            onSave={() => props.onSave("song")}
                            listItems={songListItems}/>
                    </Grid.Column>
                </Grid>
            </Container>
            )
    } else {
        return <Container>Choose a performance or create a new one</Container>
    }
}

export default GigDetail