import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react';

class NavMenu extends Component {
    render() {
        return (
            <Menu secondary fluid widths={2}>
                <Menu.Item as={Link} to="/" name="about">
                    About
                </Menu.Item>

                <Menu.Item as={Link} to="/projects" name="projects">
                    Projects
                </Menu.Item>

                {/* <Menu.Item href="https://github.com/jsonle" target="_blank" name="github">
                    GitHub
                </Menu.Item>

                <Menu.Item href="https://www.linkedin.com/in/jasondle/" target="_blank" name="linkedin">
                    LinkedIn
                </Menu.Item> */}
            </Menu>
        )}
}

export default NavMenu;