import React from 'react'
import { Checkbox, List, Transition} from 'semantic-ui-react'

let CheckBoxListItem = (props) => {

    return (
        <Transition 
          visible={props.visible} 
          animation='vertical flip' duration={500}>
        <List.Item>
            <Checkbox
                label={props.label} 
                checked={props.checked}
                onChange={props.onChange} />
        </List.Item>   
        </Transition>

    )
}

export default CheckBoxListItem