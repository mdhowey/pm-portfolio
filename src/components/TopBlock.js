import _ from 'lodash'
import React, { Component } from 'react'
import { GiDrumKit } from 'react-icons/gi'

import {
  Container,
  Dropdown,
  Header,
  Icon,
  Image,
  Menu,
  Visibility,
} from 'semantic-ui-react'

const menuStyle = {
  border: 'none',
  borderRadius: 0,
  boxShadow: 'none',
  marginBottom: '1em',
  // marginTop: '4em',
  transition: 'box-shadow 0.5s ease, padding 0.5s ease',
}

const fixedMenuStyle = {
  backgroundColor: '#fff',
  border: '1px solid #ddd',
  boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)',
}

const overlayStyle = {
  float: 'left',
  margin: '0em 2.5em 1em 0em',
}

const fixedOverlayStyle = {
  ...overlayStyle,
  position: 'fixed',
  top: '80px',
  zIndex: 10,
}

const overlayMenuStyle = {
  position: 'relative',
  left: 0,
  transition: 'left 0.5s ease',
}

const fixedOverlayMenuStyle = {
  ...overlayMenuStyle,
  left: '800px',
}

export default class TopBlock extends Component {
  // Stiky top nav and sidebar social media icons
  state = {
    menuFixed: false,
    overlayFixed: false,
  }
  // Selected menu item
  selected = { activeItem: 'closest' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  handleOverlayRef = (c) => {
    const { overlayRect } = this.selected

    if (!overlayRect) {
      this.setState({ overlayRect: _.pick(c.getBoundingClientRect(), 'height', 'width') })
    }
  }

  stickOverlay = () => this.setState({ overlayFixed: true })

  stickTopMenu = () => this.setState({ menuFixed: true })

  unStickOverlay = () => this.setState({ overlayFixed: false })

  unStickTopMenu = () => this.setState({ menuFixed: false })

  render() {
    const { menuFixed, overlayFixed, overlayRect } = this.state
    const { activeItem } = this.state
    return (
      <div>
        <Visibility
          onBottomPassed={this.stickTopMenu}
          onBottomVisible={this.unStickTopMenu}
          once={false}
        >
          <Menu
            borderless
            fixed={menuFixed ? 'top' : undefined}
            style={menuFixed ? fixedMenuStyle : menuStyle}
          >
            <Container text>
              <Menu.Item>
                <GiDrumKit />
              </Menu.Item>
              <Menu.Item header>devhowey</Menu.Item>
              <Menu.Item as='a'
                name='About'
                active={activeItem === 'About'}
                onClick={this.handleItemClick}
                href="/#about-section"
              />
              <Menu.Item as='a'
                name='Projects'
                active={activeItem === 'Projects'}
                onClick={this.handleItemClick}
                href="/#projects-section"
              />
              <Menu.Item as='a'
                name='Experience'
                active={activeItem === 'Experience'}
                onClick={this.handleItemClick}
                href="/#experience-section"
              />
            </Container>
          </Menu>
        </Visibility>
        <Container text style={{ marginTop: '2em' }}>
          <Header as='h1' style={{ marginBottom: '1em', fontSize: '4em' }}>Michael D. Howey</Header>
          <Header as='h1' style={{ marginBottom: '1em', fontSize: '2.5em' }}>Project Manager</Header>
          <Container textAlign='center' style={{ marginTop: '5em' }}>
            <Icon name='angle double down' size='big' color='pink' />
          </Container>
        </Container>

        <div id='about-section' ></div>
        <Image src='https://images.pexels.com/photos/2246476/pexels-photo-2246476.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' fluid style={{ margin: '4em 0em' }} />

        <Container text>
          <Visibility
            offset={80}
            once={false}
            onTopPassed={this.stickOverlay}
            onTopVisible={this.unStickOverlay}
            style={overlayFixed ? { ...overlayStyle, ...overlayRect } : {}}
          />

          <div ref={this.handleOverlayRef} style={overlayFixed ? fixedOverlayStyle : overlayStyle}>
            <Menu
              icon='labeled'
              style={overlayFixed ? fixedOverlayMenuStyle : overlayMenuStyle}
              vertical
            >
              <Menu.Item>
                <Icon name='linkedin' />
                <a href='https://www.linkedin.com/in/dev-howey/' target='_blank' rel='noreferrer'>LinkedIn</a>
              </Menu.Item>

              <Menu.Item>
                <Icon name='github' />
                <a href='https://github.com/mdhowey' target='_blank' rel='noreferrer'>GitHub</a>
              </Menu.Item>

              <Menu.Item>
                <Icon name='medium' />
                <a href='https://medium.com/@dev.howey' target='_blank' rel='noreferrer'>Medium</a>
              </Menu.Item>
            </Menu>
          </div>
        </Container>
      </div>
    )
  }
}