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
                            accounting software and systems, I became more and more interested in the tech side of things
                            and yearned to apply problem solving skills to technology based products.
                            This ultimately led me to attend a coding bootcamp and switch careers. 
                            Having grown up around computers and in Silicon Valley, 
                            my interests have always been in tech, which made pursuing a career in software 
                            engineering a natural switch for me. I am excited to apply my skills and work
                            collaboratively to contribute to technology that improves the lives of others.
                        </p>

                        <Header as="h3" textAlign="left" className="technical-toolbox">
                            Technical Toolbox
                        </Header>
                        <strong>Languages: </strong> JavaScript, Ruby, HTML, CSS
                        <br />
                        <strong>Libraries/Frameworks: </strong> React, Rails, Bootstrap, Semantic UI
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}

export default HomePageContainer;



