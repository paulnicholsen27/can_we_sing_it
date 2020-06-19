import React, { useState } from 'react'
import { Container,  Header, Grid, Checkbox } from 'semantic-ui-react'
import CheckBoxList from "shared/CheckBoxList.js"
import CheckBoxListItem from "shared/CheckBoxListItem.js"
import GigModal from "./GigModal.js"

let GigDetail = (props) => {

    //  default to true if it's Christmastime!!!
    let [showHoliday, changeShowHoliday] = useState(
      new Date().getMonth() >= 9) 

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
              visible={!record.song.is_holiday || showHoliday || record.included}
              onChange={(event) => props.toggleCheckBox(event, "song")}
              checked={record.included} 
              key={record.song.id}
              label={record.song.title}/> )
      })


        let toggleHoliday = () => {changeShowHoliday(current => !current)}

        return (
            <Container>
                <Header as='h3' dividing>
                    <div>{props.gig.name} - {getDate()}</div>
                    <GigModal 
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
                        <Checkbox
                          style={{marginBottom: "15px"}} 
                          label='Include Holiday Songs?' 
                          onClick={toggleHoliday}
                          checked={showHoliday} />
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