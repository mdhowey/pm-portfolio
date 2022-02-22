import {
  Container
} from 'semantic-ui-react'
import { Footer } from './Footer'
import { About } from './About'
import TopBlock from './TopBlock'
import { Recommendations } from './Recommendations'
import { Experience } from './Experience'
import { Project } from './Project'

const FixedMenuLayout = () => (
  <div>
    <Container text>
      <TopBlock />
      <About />
      <Recommendations />
      <span id='projects-section'></span>
      <Project />
      <span id='experience-section'></span>
      <Experience />
    </Container>
    <Footer />
  </div>
)

export default FixedMenuLayout