import React, { Component } from 'react';
import { Divider, Image, Item, Icon, Button, Label } from 'semantic-ui-react';

class ProjectsContainer extends Component {
    state = {  }
    render() { 
        return (
            <>
                <Divider horizontal>Projects</Divider>
                <Item.Group divided className="projects-container">
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
                                    <Button href="https://github.com/jsonle/spacejams-frontend" target="_blank">
                                        <Icon name="github" /> GitHub
                                    </Button>
                                    <Button href="https://spacejams.herokuapp.com/" target="_blank">
                                        <Icon name="play" /> Demo Site
                                    </Button>
                                </Button.Group>
                            </Item.Extra>
                        </Item.Content>
                    </Item>

                    <Item>
                        <Item.Image src={require("../../images/petsmatch.jpg")} size="medium" />
                        <Item.Content>
                            <Item.Header>PetsMatch</Item.Header>
                            <Item.Meta>
                                Dating App
                            </Item.Meta>
                            <Item.Description>
                                Dating web application that focuses on filtering your potential matches by pets they own. 
                                Users can sign up, add pets to their profile, set their preferences, browse for matches,
                                and chat with their matches live. The app will find potential matches based on preferences 
                                set by the user.
                            </Item.Description>
                            <Item.Extra>
                                <Label icon="react" size="large" content="React"/>
                                <Label icon="gem" size="large" content="Ruby"/>
                                <Label icon="js" size="large" content="JavaScript"/>

                                <Button.Group basic floated="right">
                                    <Button href="https://github.com/jsonle/petsmatch-frontend" target="_blank">
                                        <Icon name="github" /> GitHub
                                    </Button>
                                    <Button href="https://petsmatch-frontend.herokuapp.com/" target="_blank">
                                        <Icon name="play" /> Demo Site
                                    </Button>
                                </Button.Group>
                            </Item.Extra>
                        </Item.Content>
                    </Item>

                    <Item>
                        <Item.Image src={require("../../images/applexchange.jpg")} size="medium" />
                        <Item.Content>
                            <Item.Header>AppleXChange</Item.Header>
                            <Item.Meta>
                                E-Commerce Site
                            </Item.Meta>
                            <Item.Description>
                                A marketplace where users can buy iPhones and Macbooks from other people or list their own for sale.
                                Features posting reviews of products, comments on listings, and liking other users to increase approval rating.
                            </Item.Description>
                            <Item.Extra>
                                <Label icon="gem" size="large" content="Ruby"/>
                                <Button.Group basic floated="right">
                                    <Button href="https://github.com/hemeshvpatel/AppleXchange" target="_blank">
                                        <Icon name="github" /> GitHub
                                    </Button>
                                    <Button href="https://applexchange.herokuapp.com/" target="_blank">
                                        <Icon name="play" /> Demo Site
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