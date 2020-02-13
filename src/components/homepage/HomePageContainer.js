import React, { Component } from 'react';
import { Divider, Image, Header, Grid } from 'semantic-ui-react';

class HomePageContainer extends Component {

    render() {
        return (
            <div className="about">
                <Divider horizontal>About Me</Divider>
                <Grid columns={2} >

                    <Grid.Column>
                        <Image src={require("../../images/jason-prof-pic.jpg")} size="medium" circular centered/>
                    </Grid.Column>

                    <Grid.Column>
                        <Header as="h2" textAlign="left" className="about-header">
                            Jason Le
                        </Header>
                        <p>
                            Before attending Flatiron School's immersive software engineering program, 
                            I worked in accounting as my first post-college job. While working with various
                            accounting software, I became more and more interested in the tech side of things
                            and yearned to apply my problem solving skills to technology based products.
                            Having grown up around computers and in Silicon Valley, my interests have always been in tech, 
                            which made pursuing a career in software engineering a natural switch for me. 
                            This ultimately led me to attend a coding bootcamp! Now finished and still eager to learn,
                            I am excited to apply my skills and work collaboratively to contribute and make an impact in the tech space.
                        </p>

                        <Header as="h3" textAlign="left" className="technical-toolbox">
                            Technical Toolbox
                        </Header>
                        <strong>Languages: </strong> JavaScript, Ruby, HTML, CSS
                        <br />
                        <strong>Libraries/Frameworks: </strong> React, Rails, Bootstrap, Semantic UI
                        <br />
                        <strong>Other Technical Skills: </strong>  PostgreSQL, Git, OOP, AJAX, GraphQL
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}

export default HomePageContainer;



