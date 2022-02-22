import {
  Label,
  Header,
  List,
  Segment,
} from 'semantic-ui-react'

export const Experience = () => {
  return (
    <div>
      <Header style={{ margin: '3em 0em', fontSize: '2.5em' }} as='h2' textAlign='center'>Experience</Header>
      <Header as='h3'>Management</Header>
      <List>
        <List.Item>
          <List.Header>Project Manager</List.Header>
        </List.Item>
        <List.Item>
          <Label color='teal'>
            Current
          </Label>
          <span style={{ marginLeft: '4px', color: 'darkslategrey' }}>EcomByJake</span>
        </List.Item>
        <Segment color='violet' vertical>
          Breakdown challenging concepts to students who are new to different technologies.
        </Segment>
        <Segment vertical>Work directly with students to debug issues in their assignments and projects.</Segment>
        <Segment vertical>
          Prioritization of student issues across multiple projects.
        </Segment>
        <List.Item>
          <List.Header>Bar Manager</List.Header>
        </List.Item>
        <List.Item>
          <Label color='orange'>
            2+ Years
          </Label>
          <span style={{ marginLeft: '4px', color: 'darkslategrey' }}>Ladina</span>
        </List.Item>
        <Segment color='violet' vertical>
          Breakdown challenging concepts to students who are new to different technologies.
        </Segment>
        <Segment vertical>Work directly with students to debug issues in their assignments and projects.</Segment>
        <Segment vertical>
          Prioritization of student issues across multiple projects.
        </Segment>
        <List.Item>
          <List.Header>Assistant General Manager</List.Header>
        </List.Item>
        <List.Item>
          <Label color='orange'>
            4+ Years
          </Label>
          <span style={{ marginLeft: '4px', color: 'darkslategrey' }}>Mezzaluna</span>
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
          <List.Header>Teaching Assistant</List.Header>
        </List.Item>
        <List.Item>
          <Label color='teal'>
            Current
          </Label>
          <span style={{ marginLeft: '4px', color: 'darkslategrey' }}>General Assembly</span>
        </List.Item>
        <Segment color='green' vertical>
          Breakdown challenging concepts to students who are new to different technologies.
        </Segment>
        <Segment vertical>Work directly with students to debug issues in their assignments and projects.</Segment>
        <Segment vertical>
          Prioritization of student issues across multiple projects.
        </Segment>
        <List.Item>
          <List.Header>English Teacher</List.Header>
        </List.Item>
        <List.Item>
          <Label color='orange'>
            2+ Years
          </Label>
          <span style={{ marginLeft: '4px', color: 'darkslategrey' }}>Open English</span>
        </List.Item>
        <Segment color='green' vertical>
          Breakdown challenging concepts to students who are new to different technologies.
        </Segment>
        <Segment vertical>Work directly with students to debug issues in their assignments and projects.</Segment>
        <Segment vertical>
          Prioritization of student issues across multiple projects.
        </Segment>
        <List.Item>
          <List.Header>English Teacher</List.Header>
        </List.Item>
        <List.Item>
          <Label color='orange'>
            2+ Years
          </Label>
          <Label color='purple'>
            Self-employed
          </Label>
          <span style={{ marginLeft: '4px', color: 'darkslategrey' }}>Slick Speak</span>
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
          <List.Header>Web Developer</List.Header>
        </List.Item>
        <List.Item>
          <Label color='teal'>
            Current
          </Label>
          <span style={{ marginLeft: '4px', color: 'darkslategrey' }}>EcomByJake</span>
        </List.Item>
        <Segment color='pink' vertical>
          Breakdown challenging concepts to students who are new to different technologies.
        </Segment>
        <Segment vertical>Work directly with students to debug issues in their assignments and projects.</Segment>
        <Segment vertical>
          Prioritization of student issues across multiple projects.
        </Segment>
      </List>
    </div>
  )
}
