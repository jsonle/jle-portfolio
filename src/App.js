import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Container } from 'semantic-ui-react';
import HomePageContainer from './components/homepage/HomePageContainer';
import NavMenu from './components/nav/NavMenu';
import ProjectsContainer from './components/projects/ProjectsContainer';

function App() {
  return (
    <Container className="App" >
      <Router>
      <NavMenu />
        <Switch>
          <Route exact path="/"><HomePageContainer /></Route>
          <Route path="/projects"><ProjectsContainer /></Route>
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
