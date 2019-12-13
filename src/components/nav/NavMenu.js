import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Menu, Icon, Grid } from 'semantic-ui-react';
import resume from '../../documents/resume.pdf'
class NavMenu extends Component {
    render() {
        return (
                <Menu secondary>
                    <Menu.Item as={Link} to="/" name="about">
                        About
                    </Menu.Item>

                    <Menu.Item as={Link} to="/projects" name="projects">
                        Projects
                    </Menu.Item>

                    <Menu.Item href={resume} target="_blank" name="resume">
                        Resume
                    </Menu.Item>

                    <Menu.Menu position="right">
                        <Menu.Item href="https://github.com/jsonle" target="_blank" name="github">
                            <Icon name="github" />
                        </Menu.Item>

                        <Menu.Item href="https://www.linkedin.com/in/jasondle/" target="_blank" name="linkedin">
                            <Icon name="linkedin" />
                        </Menu.Item>
                    </Menu.Menu>
                </Menu>
        )}
}

export default NavMenu;