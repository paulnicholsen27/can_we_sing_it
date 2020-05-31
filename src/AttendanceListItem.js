import React, { useState } from 'react'
import { Checkbox, List } from 'semantic-ui-react'

let AttendanceListItem = (props) => {

    return (

        <List.Item >
            <Checkbox 
                label={props.record.singer.name} 
                checked={props.checked}
                onChange={() => props.onChange(props.record.singer.id)} />
        </List.Item>   

    )
}

export default AttendanceListItem