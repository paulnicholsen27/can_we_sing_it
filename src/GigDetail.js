import React from 'react'
import { Container } from 'semantic-ui-react'

let GigDetail = (props) => {

    return (
          <Container>
            <div>{props.gig ? props.gig.name : "Choose a performance."}</div>
          </Container>
    )
}

export default GigDetail