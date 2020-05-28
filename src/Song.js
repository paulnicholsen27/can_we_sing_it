import React from 'react'
import { List, Icon} from 'semantic-ui-react'

let Song = (props) => {

    return (
        <List.Item as="a">
          <Icon name={props.song.holiday ? 'tree' : 'music' }/>
          <List.Content>
            {props.song.title}
          </List.Content>
        </List.Item>
    )
}

export default Song