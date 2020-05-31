import React from 'react'
import { List, Icon} from 'semantic-ui-react'

let Singer = (props) => {

    return (
        <List.Item>
          <Icon name='music' />
          <List.Content>
            {props.singer.name}
          </List.Content>
        </List.Item>
    )
}

export default Singer