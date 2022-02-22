import { Card } from 'semantic-ui-react'

const items = [
  {
    header: 'EcomByJake',
    description:
      'Lead team of 3 writers; I edit and approve final content, conduct trainings, and keep team on track',
    meta: '10/22 - Present',
    extra: 'WordPress, Google Workplace, Ahrefs, edik.ly'
  },
  {
    header: 'edik.ly',
    description:
      'Lead team of 3 developers, myself included; currently using Git Projects for project flow.',
    meta: '1/22 - Present',
    extra: 'Chart.js, React.js, Express.js, Node.js, PostgreSQL'
  },
  {
    header: 'Wayfarer',
    description:
      'Led team of 4 developers, myself included; orchestrated completion of fullstack application in 1 week',
    meta: '11/21',
    extra: 'Bootstrap, Django, Python, PostgreSQL'
  },
  {
    header: 'PikChu',
    description:
      'Led team of 2 developers, myself included; completed fullstaack application in 2 weeks',
    meta: '10/21',
    extra: 'Express, Node.js, MongoDB'
  },
]

export const Project = () => {
  return (
    <Card.Group>
      <Card fluid
        header='EcomByJake'
        description='Lead team of 3 writers; I edit and approve final content, conduct trainings, and keep team on track'
        meta='10/22 - Present'
        extra='WordPress, Google Workplace, Ahrefs, edik.ly'
        style={{ marginBottom: '3em' }}
      />
      <Card fluid
        header='edik.ly'
        description='Lead team of 3 developers, myself included; currently using Git Projects for project flow.'
        meta='1/22 - Present'
        extra='Chart.js, React.js, Express.js, Node.js, PostgreSQL'
        style={{ marginBottom: '3em' }}
      />
      <Card fluid
        header='Wayfarer'
        description='Led team of 4 developers, myself included; orchestrated completion of fullstack application in 1 week'
        meta='11/21'
        extra='Bootstrap, Django, Python, PostgreSQL'
        style={{ marginBottom: '3em' }}
      />
      <Card fluid
        header='PikChu'
        description='Led team of 2 developers, myself included; completed fullstaack application in 2 weeks'
        meta='10/21'
        extra='Express, Node.js, MongoDB'
        style={{ marginBottom: '3em' }}
      />
    </Card.Group>
  )
}
