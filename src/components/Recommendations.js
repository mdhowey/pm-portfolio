import React from 'react'
import {
  Button,
  Grid,
  Image,
  Header,
  Segment,
  Container
} from 'semantic-ui-react'

export const Recommendations = () => {
  return (
    <>
      <Segment style={{ padding: '0em' }} vertical>
        <Grid celled='internally' columns='equal' stackable>
          <Grid.Row textAlign='center'>
            <Grid.Column style={{ padding: '5em 2em' }}>
              <p style={{ fontSize: '1.5em' }}>
                "Michael is a gem of a contractor. Dedicated, extremely skilled, easy to work with, and always on time."
              </p>
              <p><b>Jake</b> Chief Strategist @ EcomByJake</p>
              <Button as='a' size='large' color="pink" style={{ marginTop: '2em' }}>
                Read More
              </Button>
            </Grid.Column>
            <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
              <p style={{ fontSize: '1.5em' }}>
                He is an ambitious, hardworking, and talented coder as well as a great teacher and a very positive influence on class culture.
              </p>
              <p>
                <b>Katie</b> Instructor Associate @ General Assembly
              </p>
              <Button as='a' size='large' color="pink" style={{ marginTop: '2em' }}>
                Read More
              </Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Container textAlign='center' style={{ margin: '7em 0em' }}>
        <Header as='h3' style={{ fontSize: '3em' }}>
          What do instructors think?
        </Header>
      </Container>
      <Container text textAlign='center' style={{ margin: '5em' }}>
        <p style={{ fontSize: '1.33em' }}>
          "Michael was a model student in terms of always
          completing what was needed for each of the deliverables and ensuring he always had solid
          projects because of the consistent work he put in day in and day out. What made Michael truly
          stand out in this course was his attitude and willingness to put aside his needs to help other
          students."
        </p>
        <p><b>Eric</b> Lead Instructor @ General Assembly</p>
      </Container>
      <Container textAlign='center'>
        <Button as='a' size='massive' color="pink" style={{ margin: '3em 0em' }}>
          Contact
        </Button>
      </Container>
    </>
  )
}
