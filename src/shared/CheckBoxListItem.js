import React, { useState } from 'react'
import { Checkbox, List } from 'semantic-ui-react'

let CheckBoxListItem = (props) => {

    return (

        <List.Item >
            <Checkbox 
                label={props.label} 
                checked={props.checked}
                onChange={() => props.onChange(props.record.singer.id)} />
        </List.Item>   

    )
}

export default CheckBoxListItem