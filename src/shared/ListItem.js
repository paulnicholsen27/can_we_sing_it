import React from 'react'
import { List, Icon, Transition} from 'semantic-ui-react'

let ListItem = (props) => {

    return (
        <Transition 
          visible={props.visible} 
          animation='vertical flip' duration={500}>
        <List.Item as="a"
          onClick={props.onClick}>

          <Icon name={props.icon}/>
          <List.Content>
            {props.content}
          </List.Content>
        </List.Item>
        </Transition>
    )
}

export default ListItem