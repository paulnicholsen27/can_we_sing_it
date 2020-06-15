import React, {useState, useEffect} from 'react'
import { Button, List, Container, Header } from 'semantic-ui-react'
import CheckBoxListItem from "./CheckBoxListItem.js"

let CheckBoxList = (props) => {

    const listItems = props.items.map((record) => {
        return ( <CheckBoxListItem
            onChange={props.onChange}
            checked={record.attending} 
            key={record.singer.id}
            label={record.singer.name}/> )
    })

    return (
            
        <Container>   
            <Header as="h4">{props.title}</Header>
            <List>{listItems}</List>
            <Button onClick={props.onSave}>Save Changes</Button>
        </Container>
    )


}

export default CheckBoxList
