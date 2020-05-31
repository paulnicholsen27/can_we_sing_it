import React, {useState, useEffect} from 'react'
import { Button, List, Container, Header } from 'semantic-ui-react'
import AttendanceListItem from "./AttendanceListItem.js"

let AttendanceList = (props) => {
    let [attendeeIds, changeAttendeeIds] = useState(Object.fromEntries(
                props.gig.attendance.map(e => [e.singer.id, e.attending])))


    useEffect(() => {
        changeAttendeeIds(
            Object.fromEntries(
                props.gig.attendance.map(e => [e.singer.id, e.attending])))
        }, [props.gig])

    let saveAttendance = () => {

    }

    // let toggleCheckBox = (record) => {
    //     // let singerId = record.singer.id
    //     // changeAttendeeIds({
    //     //     ...attendeeIds,
    //     //     [singerId]: !attendeeIds[singerId]
    //     // })
    //     debugger
    //     // changeAttendance(prevState => ({
    //     //     ...prevState,
    //     //     attending: !prevState.attending
    //     //  }));
    // }

    let toggleCheckBox = id => {
        changeAttendeeIds(
            {...attendeeIds,
             [id]: !attendeeIds[id]
            }
        )
    }


    const attendanceLis = props.gig.attendance.map((record) => {
        return ( <AttendanceListItem
            onChange={toggleCheckBox}
            checked={attendeeIds[record.singer.id]} 
            key={record.singer.id}
            record={record}/> )
    })

    return (
            
        <Container>   
            <Header as="h4">Attendance:</Header>
            <List>{attendanceLis}</List>
            <Button onSubmit={saveAttendance}>Save Changes</Button>
        </Container>
    )


}

export default AttendanceList
