import React from 'react'
import { Button, List, Container, Header } from 'semantic-ui-react'

let CheckBoxList = (props) => {

    return (
            
        <Container>   
            <Header as="h4">{props.title}</Header>
            <List>
                {props.listItems}
            </List>
            <Button onClick={props.onSave}>Save Changes</Button>
        </Container>
    )


}

export default CheckBoxList
