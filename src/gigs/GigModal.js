import React, { useState } from 'react'
import {Modal, Header, Button, Icon, Form} from 'semantic-ui-react'
import {
  DateInput,
} from 'semantic-ui-calendar-react';

let GigModal = (props) => {

  let [modalOpen, setModalOpen] = useState(false)

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
                value={props.gig.name} 
                onChange={props.handleChange}/>
              <DateInput
                label="Date"
                localization="en_US"
                dateFormat="LL"
                name="start_time"
                placeholder="Date"
                value={props.gig.start_time} // TODO remove time from date
                onChange={props.handleChange}
                iconPosition="left"
                closable={true}
              />
              <Form.TextArea
                label="Notes"
                type="text"
                name="notes"
                value={props.gig.notes}
                onChange={props.handleChange}
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