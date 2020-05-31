import React, { useState } from 'react'
import { Checkbox, List } from 'semantic-ui-react'

let AttendanceListItem = (props) => {

    // let [record, changeRecord] = useState(props.record)
    // let clicked = (r) => {
    //     r.attending = !r.attending
    //     changeAttending(r.attending)
    // }

    // let [checked, setChecked] = useState(props.record.attending)
    


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