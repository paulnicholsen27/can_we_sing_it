import React from 'react'
import {Modal, Header, Button, Icon, Form} from 'semantic-ui-react'
let gigModal = (props) => {

    let submitForm = (e) => {console.log(e)}

    return (

        <Modal
          trigger={<Button size='mini'>Edit Details</Button>} 
          as={Form}
          onSubmit={e => submitForm(e)}
          closeIcon>
          <Header icon='edit' content='Edit this performance' />
          <Modal.Content>
              <Form.Input label="Name" required type="text" value={props.gig.name} />
              <Form.Input label="Date" type="text" value={props.gig.name} />
              <Form.Input label="Time" type="text" value={props.gig.name} />
              <Form.Input label="Notes" type="text" value={props.gig.notes} />
          </Modal.Content>
          <Modal.Actions>
            <Button color='green' onClick={() => props.editGig(props.gig)}>
              <Icon name='checkmark' />Submit changes
            </Button>
          </Modal.Actions>
        </Modal>

    )
}

export default gigModal