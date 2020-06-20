import React, { useState } from 'react'
import {Modal, Header, Button, Icon, Form} from 'semantic-ui-react'
import {
  DateInput,
} from 'semantic-ui-calendar-react';
import moment from 'moment';

let GigModal = (props) => {
    const initialStartTime = moment(props.gig.start_time).toDate()
    let [startTime, changeStartTime] = useState(initialStartTime)
    let [name, changeName] = useState(props.gig.name)
    let [notes, changeNotes] = useState(props.gig.notes)
    let handleChange = (event, { name, value }) => {
      switch(name) {
      case "date":
        changeStartTime(value)
        break;
      case "name":
        changeName(value)
        break;
      case "notes":
        changeNotes(value)
        break;
      default:
        console.log(name, value)
      }
    }

    let submitForm = (e) => {console.log(e)}

    return (

        <Modal
          trigger={<Button size='mini'>Edit Details</Button>} 
          as={Form}
          onSubmit={e => submitForm(e)}
          closeIcon>
          <Header icon='edit' content='Edit this performance' />
          <Modal.Content>
              <Form.Input 
                label="Name"
                name="name" 
                required type="text" 
                value={name} 
                onChange={handleChange}/>
              <DateInput
                localization="en_US"
                dateFormat="LL"
                name="date"
                placeholder="Date"
                value={startTime}
                iconPosition="left"
                onChange={handleChange}
                closable={true}
              />
              <Form.TextArea
                label="Notes"
                type="text"
                name="notes"
                value={notes}
                onChange={handleChange}
              />
          </Modal.Content>
          <Modal.Actions>
            <Button color='green' onClick={() => props.editGig(props.gig)}>
              <Icon name='checkmark' />Submit changes
            </Button>
          </Modal.Actions>
        </Modal>

    )
}

export default GigModal