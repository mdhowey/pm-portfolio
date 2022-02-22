import {
  Container,
  Divider,
  Grid,
  Header,
  List,
  Segment,
} from 'semantic-ui-react'
import { Footer } from './Footer'
import { About } from './About'
import TopBlock from './TopBlock'
import { Recommendations } from './Recommendations'

const FixedMenuLayout = () => (
  <div>
    <Container text>
      
      <TopBlock />

      <About />

      <Recommendations />

      <Header as='h2'>Experience</Header>
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
    <Footer />
  </div>
)

export default FixedMenuLayout