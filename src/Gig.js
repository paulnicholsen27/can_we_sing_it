import React from 'react'
import { List, Icon} from 'semantic-ui-react'

let Gig = (props) => {

    return (
        <List.Item as="a">
          <Icon name='music' />
          <List.Content>
            {props.gig.name}
          </List.Content>
        </List.Item>
    )
}

export default Gig