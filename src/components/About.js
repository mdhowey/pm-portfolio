import React from 'react'
import {
  Button,
  Container,
  Header,
  Segment
} from 'semantic-ui-react'

export const About = () => {
  return (
    <Segment vertical>
      <Container style={{ marginBottom: '2em' }} text>
        <Header as='h3' style={{ fontSize: '2em' }}>
          Who is this guy?
        </Header>
        <p style={{ fontSize: '1.5em' }}>
          Originally from Perham, Minnesota, Howey grew up in a small town made famous by potato chips and dog food. Here he devloped a love for music and spent most of his young life bothering the neighbors with his drums. He studied jazz for a time in university and worked every concievable job in restaurants to put some money in his pocket while studying music. From dishwasher to cook, server to bartender, and beverage director to assitant general manager, he had had enough of restaurants. Always having a love for language, he has spent the last 5 years in Mexico City working as both an English teacher and content writer while studying Spanish.
        </p>

        <Header as='h3' style={{ fontSize: '2em' }}>
          Looking for a great fit for your team?
        </Header>
        <p style={{ fontSize: '1.5em' }}>
          Life has been good for Howey, but he is looking for more. When the pandemic rocked the world in 2020, he realized it was time for a change and enrolled in university yet again this time to study computer science. With a coding bootcamp finished, Howey is building websites and web-based applications for clients. Hes also managing projects and writing SEO content. He would love to talk to you about how he could be an asset to your team.
        </p>
        <Container textAlign='center'>
          <Button as='a' size='massive' color="pink" style={{ marginTop: '4em' }}>
            Contact
          </Button>
        </Container>
      </Container>
      <Container textAlign='center' style={{ margin: '7em 0em' }}>
        <Header as='h3' style={{ fontSize: '3em' }}>
          What do colleagues say about him?
        </Header>
      </Container>
    </Segment>
  )
}
