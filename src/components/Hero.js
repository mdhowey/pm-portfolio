import React from 'react'
import {
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Image,
  List,
  Menu,
  Segment,
} from 'semantic-ui-react'

const FixedMenuLayout = () => (
  <div>
    <Menu fixed='top' inverted>
      <Container>
        <Menu.Item as='a' header>
          {/* <Image size='mini' src='/logo.png' style={{ marginRight: '1.5em' }} /> */}
          devhowey
        </Menu.Item>
        <Menu.Item as='a'>About</Menu.Item>
        <Menu.Item as='a'>Projects</Menu.Item>
        <Menu.Item as='a'>Contact</Menu.Item>

        {/* <Dropdown item simple text='Dropdown'>
          <Dropdown.Menu>
            <Dropdown.Item>List Item</Dropdown.Item>
            <Dropdown.Item>List Item</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Header>Header Item</Dropdown.Header>
            <Dropdown.Item>
              <i className='dropdown icon' />
              <span className='text'>Submenu</span>
              <Dropdown.Menu>
                <Dropdown.Item>List Item</Dropdown.Item>
                <Dropdown.Item>List Item</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown.Item>
            <Dropdown.Item>List Item</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown> */}
      </Container>
    </Menu>

    <Container text style={{ marginTop: '7em' }}>
      <Header as='h1'>Michael D. Howey</Header>
      <Header as='h2'>Project Manager</Header>
      <Header as='h3'>dev.howey@gmail.com</Header>
      <p>
        A Minnesotan in Mexico who enjoys finding patterns in syntax, both in spoken and programming languages
      </p>

      <Image src='https://images.pexels.com/photos/2422479/pexels-photo-2422479.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=650' style={{ margin: '2em 0 2em 0' }} />
      <p>
        Originally from Perham, Minnesota, Howey grew up in a small town made famous by potato chips and dog food. Here he devloped a love for music and spent most of his young life bothering the neighbors with his drums. He studied jazz for a time in university and worked every concievable job in restaurants to put some money in his pocket while studying music. From dishwasher to cook, server to bartender, and beverage director to assitant general manager, he had had enough of restaurants. Always having a love for language, he has spent the last 5 years in Mexico City working as both an English teacher and content writer while studying Spanish.
      </p>
      <Image src='https://images.pexels.com/photos/2246476/pexels-photo-2246476.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' style={{ margin: '2em 0 2em 0' }} />
      <p>
        Life has been good for Howey, but he is looking for more. When the pandemic rocked the world in 2020, he realized it was time for a change and enrolled in university yet again this time to study computer science. Currently studying and having now completed a 450+ hour imersive bootcamp, Howey is building websites and web-based applications for his clients. He would love to talk to you about your current web needs and work on a solution for you.
      </p>
      <Header as='h2'>Relevant Experience</Header>
      <Header as='h3'>Management</Header>
      <List>
        <List.Item>
          <List.Header>EcomByJake</List.Header>
        </List.Item>
        <List.Item>
          Project Manager
        </List.Item>
        <Segment color='violet' vertical>
          Breakdown challenging concepts to students who are new to different technologies.
        </Segment>
        <Segment vertical>Work directly with students to debug issues in their assignments and projects.</Segment>
        <Segment vertical>
          Prioritization of student issues across multiple projects.
        </Segment>
        <List.Item>
          <List.Header>Ladina</List.Header>
        </List.Item>
        <List.Item>
          Bar Manager
        </List.Item>
        <Segment color='violet' vertical>
          Breakdown challenging concepts to students who are new to different technologies.
        </Segment>
        <Segment vertical>Work directly with students to debug issues in their assignments and projects.</Segment>
        <Segment vertical>
          Prioritization of student issues across multiple projects.
        </Segment>
        <List.Item>
          <List.Header>Mezzaluna</List.Header>
        </List.Item>
        <List.Item>
          Assistnat General Manager
        </List.Item>
        <Segment color='violet' vertical>
          Breakdown challenging concepts to students who are new to different technologies.
        </Segment>
        <Segment vertical>Work directly with students to debug issues in their assignments and projects.</Segment>
        <Segment vertical>
          Prioritization of student issues across multiple projects.
        </Segment>
      </List>
      <Header as='h3'>Teaching</Header>
      <List>
        <List.Item>
          <List.Header>General Assembly</List.Header>
        </List.Item>
        <List.Item>
          Teaching Assistant
        </List.Item>
        <Segment color='green' vertical>
          Breakdown challenging concepts to students who are new to different technologies.
        </Segment>
        <Segment vertical>Work directly with students to debug issues in their assignments and projects.</Segment>
        <Segment vertical>
          Prioritization of student issues across multiple projects.
        </Segment>
        <List.Item>
          <List.Header>Open English</List.Header>
        </List.Item>
        <List.Item>
          English Teacher
        </List.Item>
        <Segment color='green' vertical>
          Breakdown challenging concepts to students who are new to different technologies.
        </Segment>
        <Segment vertical>Work directly with students to debug issues in their assignments and projects.</Segment>
        <Segment vertical>
          Prioritization of student issues across multiple projects.
        </Segment>
        <List.Item>
          <List.Header>Wisdom Escuelas</List.Header>
        </List.Item>
        <List.Item>
          English Teacher
        </List.Item>
        <Segment color='green' vertical>
          Breakdown challenging concepts to students who are new to different technologies.
        </Segment>
        <Segment vertical>Work directly with students to debug issues in their assignments and projects.</Segment>
        <Segment vertical>
          Prioritization of student issues across multiple projects.
        </Segment>
      </List>
      <Header as='h3'>Web Development</Header>
      <List>
        <List.Item>
          <List.Header>EcomByJake</List.Header>
        </List.Item>
        <List.Item>
          Web Developer
        </List.Item>
        <Segment color='pink' vertical>
          Breakdown challenging concepts to students who are new to different technologies.
        </Segment>
        <Segment vertical>Work directly with students to debug issues in their assignments and projects.</Segment>
        <Segment vertical>
          Prioritization of student issues across multiple projects.
        </Segment>
      </List>
      <Header as='h2'>Projects</Header>
      <Header as='h3'>edik.ly</Header>
      <Segment color='olive' vertical>
        Breakdown challenging concepts to students who are new to different technologies.
      </Segment>
      <Segment vertical>Work directly with students to debug issues in their assignments and projects.</Segment>
      <Segment vertical>
        Prioritization of student issues across multiple projects.
      </Segment>
      <Header as='h3'>Wayfarer</Header>
      <Segment color='olive' vertical>
        Breakdown challenging concepts to students who are new to different technologies.
      </Segment>
      <Segment vertical>Work directly with students to debug issues in their assignments and projects.</Segment>
      <Segment vertical>
        Prioritization of student issues across multiple projects.
      </Segment>
    </Container>

    <Segment inverted vertical style={{ margin: '5em 0em 0em', padding: '5em 0em' }}>
      <Container textAlign='center'>
        <Grid divided inverted stackable>
          <Grid.Column width={3}>
            <Header inverted as='h4' content='Development' />
            <List link inverted>
              <List.Item as='a'></List.Item>
              <List.Item as='a'></List.Item>
              <List.Item as='a'></List.Item>
              <List.Item as='a'></List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={3}>
            <Header inverted as='h4' content='Content Writing' />
            <List link inverted>
              <List.Item as='a'></List.Item>
              <List.Item as='a'></List.Item>
              <List.Item as='a'></List.Item>
              <List.Item as='a'></List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={3}>
            <Header inverted as='h4' content='Project Management' />
            <List link inverted>
              <List.Item as='a'></List.Item>
              <List.Item as='a'></List.Item>
              <List.Item as='a'></List.Item>
              <List.Item as='a'></List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={7}>
            <Header inverted as='h4' content='Thanks for stopping by!' />
            <p>
              Your time is appreciated. Let me know how I can help you!
            </p>
          </Grid.Column>
        </Grid>

        <Divider inverted section />
        <Image centered size='mini' src='/logo.png' />
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
  </div>
)

export default FixedMenuLayout