import React, { useState } from 'react'
import { Checkbox, List } from 'semantic-ui-react'

let CheckBoxListItem = (props) => {

    return (

        <List.Item>
            <Checkbox
                label={props.label} 
                checked={props.checked}
                onChange={props.onChange} />
        </List.Item>   

    )
}

export default CheckBoxListItem