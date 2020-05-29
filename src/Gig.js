import React from 'react'
import { List, Icon} from 'semantic-ui-react'

let Gig = (props) => {
    console.log(props.gig.name)
    return (
        <List.Item as="a" onClick={() => props.onClick(props.gig) }>
          <Icon name='music' />
          <List.Content>
            {props.gig.name}
          </List.Content>
        </List.Item>
    )
}

export default Gig