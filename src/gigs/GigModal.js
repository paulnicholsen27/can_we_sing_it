import React from 'react'
import {Modal, Header, Button, Icon} from 'semantic-ui-react'
let gigModal = (props) => {
    return (

        <Modal trigger={<Button size='mini'>Edit Details</Button>} closeIcon>
          <Header icon='edit' content='Edit this performance' />
          <Modal.Content>
            <div>
              {props.gig.name}
            </div>
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