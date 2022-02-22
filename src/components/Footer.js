import { GiDrumKit } from 'react-icons/gi'
import {
  Container,
  Divider,
  Header,
  List,
  Grid,
  Segment,
} from 'semantic-ui-react'

export const Footer = () => {
  return (
    <Segment inverted vertical style={{ margin: '5em 0em 0em', padding: '5em 0em' }}>
      <Container textAlign='center'>
        <Grid divided inverted stackable>
          <Grid.Column width={3}>
            <Header inverted as='h4' content='Project Management' />
            <List link inverted>
              <List.Item as='a'>edik.ly</List.Item>
              <List.Item as='a'>Wayfarer</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={3}>
            <Header inverted as='h4' content='Content Writing' />
            <List link inverted>
              <List.Item as='a'>EcomByJake</List.Item>
              <List.Item as='a'>Medium Blog</List.Item>
              <List.Item as='a'>Request Sample</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={3}>
            <Header inverted as='h4' content='Web Development' />
            <List link inverted>
              <List.Item as='a'>devhowey Portfolio</List.Item>
              <List.Item as='a'>PikChu</List.Item>
              <List.Item as='a'>Wayfarer</List.Item>
              <List.Item as='a'>FinCap</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={7}>
            <Header inverted as='h4' content='Thanks for stopping by!' />
            <p>
              If you have questions, don't hesitate to ask! Don't have any questions? Reach out anyways and let's work together!
            </p>
          </Grid.Column>
        </Grid>

        <Divider inverted section />
        <Container>
          <GiDrumKit />
        </Container>
        <List horizontal inverted divided link size='small'>
          <List.Item as='a' href='#'>
            Portfolio
          </List.Item>
          <List.Item as='a' href='#'>
            LinkedIn
          </List.Item>
          <List.Item as='a' href='#'>
            GitHub
          </List.Item>
          <List.Item as='a' href='#'>
            Medium
          </List.Item>
        </List>
      </Container>
    </Segment>
  )
}
