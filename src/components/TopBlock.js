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
  state = {
    menuFixed: false,
    overlayFixed: false,
  }

  handleOverlayRef = (c) => {
    const { overlayRect } = this.state

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
              <Menu.Item as='a'target=''>Experience</Menu.Item>
              <Menu.Item as='a'>Projects</Menu.Item>

              <Menu.Menu position='right'>
                <Dropdown text='More' pointing className='link item'>
                  <Dropdown.Menu>
                    <Dropdown.Item>About</Dropdown.Item>
                    <Dropdown.Item>Contact</Dropdown.Item>
                    <Dropdown.Header>Other Skills</Dropdown.Header>
                    <Dropdown.Item as='a'>Web Development</Dropdown.Item>
                    <Dropdown.Item as='a'>SEO</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Menu.Menu>
            </Container>
          </Menu>
        </Visibility>
        <Container text style={{ marginTop: '2em' }}>
          <Header as='h1' style={{ marginBottom: '1em', fontSize: '4em' }}>Michael D. Howey</Header>
          <Header as='h1' style={{ marginBottom: '1em', fontSize: '2.5em' }}>Project Manager</Header>
          <Image src='https://images.pexels.com/photos/2246476/pexels-photo-2246476.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' fluid style={{ marginBottom: '4em' }} />
        </Container>

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
                LinkedIn
              </Menu.Item>

              <Menu.Item>
                <Icon name='github' />
                GitHub
              </Menu.Item>

              <Menu.Item>
                <Icon name='medium' />
                Medium
              </Menu.Item>
            </Menu>
          </div>
        </Container>
      </div>
    )
  }
}