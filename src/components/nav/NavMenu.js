import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Menu, Icon } from 'semantic-ui-react';
import JasonLeResume from '../../documents/JasonLeResume.pdf'

class NavMenu extends Component {
    render() {
        return (
                <Menu secondary>
                    <Menu.Item as={Link} to="/" name="about">
                        <strong>About</strong>
                    </Menu.Item>

                    <Menu.Item as={Link} to="/projects" name="projects">
                        <strong>Projects</strong>
                    </Menu.Item>

                    <Menu.Item href={JasonLeResume} target="_blank" name="resume">
                        <strong>Resume</strong>
                    </Menu.Item>

                    <Menu.Menu position="right">
                        <Menu.Item href="https://github.com/jsonle" target="_blank" name="github">
                            <Icon name="github" size="large" />
                        </Menu.Item>

                        <Menu.Item href="https://www.linkedin.com/in/jasondle/" target="_blank" name="linkedin">
                            <Icon name="linkedin" size="large" />
                        </Menu.Item>
                    </Menu.Menu>
                </Menu>
        )}
}

export default NavMenu;