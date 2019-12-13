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
                            I was working in accounting as my first post-college job. After working for 
                            around a year and a half, I decided I wanted to switch careers to a field I 
                            had more interest in. Having grown up around computers and in Silicon Valley, 
                            my interests have always been in tech, which made pursuing a career in software 
                            engineering a natural switch for me. I am excited to apply my skills to technology
                            that improves people’s lives while also continuing to improve and learn from others.
                        </p>

                        <Header as="h3" textAlign="left" className="technical-toolbox">
                            Technical Toolbox
                        </Header>
                        <strong>Languages: </strong> JavaScript, Ruby, HTML, class
                        <br />
                        <strong>Libraries/Frameworks: </strong> React, Rails, Bootstrap, Semantic UI
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}

export default HomePageContainer;



