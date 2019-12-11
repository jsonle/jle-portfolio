import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HomePageContainer from './components/homepage/HomePageContainer';
import NavMenu from './components/nav/NavMenu';

function App() {
  return (
    <div className="App">
      <NavMenu />
      <Router>
        <Route exact path="/"><HomePageContainer /></Route>
      </Router>
    </div>
  );
}

export default App;
