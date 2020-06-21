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
    let [modalOpen, setModalOpen] = useState(false)
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

    let handleOpen = () => {setModalOpen(true)}
    let handleClose = () => {setModalOpen(false)}

    let closeAndSubmit = (e) => {
      handleClose()
      props.handleSubmit(e)

    }
    return (

        <Modal
          trigger={<Button onClick={handleOpen} size='mini'>{props.triggerText}</Button>} 
          as={Form}
          open={modalOpen}
          onSubmit={closeAndSubmit}
          onClose={handleClose}
          closeIcon>
          <Header icon='edit' content={props.triggerText} />
          <Modal.Content>
              <Form.Input 
                  name="id" 
                  value={props.gig.id} 
                  type="hidden"/>
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
            <Button color='green' type="submit">
              <Icon name='checkmark' />{props.submitText}
            </Button>
          </Modal.Actions>
        </Modal>

    )
}

export default GigModal