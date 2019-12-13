import React, { Component } from 'react';
import { Divider, Image, Item, Icon, Button, Label } from 'semantic-ui-react';

class ProjectsContainer extends Component {
    state = {  }
    render() { 
        return (
            <>
                <Divider horizontal>Projects</Divider>
                <Item.Group divided>
                    <Item>
                        <Item.Image src={require("../../images/spacejams.jpg")} size="medium" />
                        <Item.Content>
                            <Item.Header>SpaceJams</Item.Header>
                            <Item.Meta>
                                Live Music App
                            </Item.Meta>
                            <Item.Description>
                                A web application that allows users to listen to playlists with other people!
                                After signing in through their Spotify, 
                                users can join live playlist rooms where they can listen and chat with others. 
                                Currently only uses playlists created by Spotify.
                            </Item.Description>
                            <Item.Extra>
                                <Label icon="react" size="large" content="React"/>
                                <Label icon="gem" size="large" content="Ruby"/>
                                <Label icon="js" size="large" content="JavaScript"/>

                                <Button.Group basic floated="right">
                                    <Button>
                                        <Icon name="play" /> Demo Site
                                    </Button>
                                    <Button href="https://spacejams.herokuapp.com/" target="_blank">
                                        <Icon name="github" /> GitHub
                                    </Button>
                                </Button.Group>
                            </Item.Extra>
                        </Item.Content>
                    </Item>

                </Item.Group>
            </>
        );
    }
}
 
export default ProjectsContainer;