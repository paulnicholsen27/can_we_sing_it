import React from 'react'
import { Checkbox, List, Transition} from 'semantic-ui-react'

let CheckBoxListItem = (props) => {

    return (
        <Transition 
          visible={props.visible} 
          style={{display: "none"}}
          animation='vertical flip' duration={300}>
        <List.Item
            style={{display: props.visible ? "list-item" : "none"}}>
            <Checkbox
                label={props.label} 
                checked={props.checked}
                onChange={props.onChange} />
        </List.Item>   
        </Transition>

    )
}

export default CheckBoxListItem