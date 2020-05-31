import React from 'react'
import { List, Icon, Transition} from 'semantic-ui-react'

let Song = (props) => {

    return (
        <Transition 
          visible={!props.song.holiday || props.showHolidaySongs} 
          animation='vertical flip' duration={500}>
        <List.Item as="a">
          <Icon name={props.song.holiday ? 'tree' : 'music' }/>
          <List.Content>
            {props.song.title}
          </List.Content>
        </List.Item>
        </Transition>
    )
}

export default Song