import './App.css';
import React from "react";
import TeamMember from './components/TeamMember/TeamMember';
import Home from './components/Home/Home';
import About from './components/About/About';
import Error from './components/Error/Error';

import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import Services from './components/Services/Services';



function App() {
  return (
    <div className="App">


      <Router>

        <Switch>

          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route exact path="/home">
            <Home></Home>
          </Route>

          <Route path="/teamMember">
            <TeamMember></TeamMember>
          </Route>

          <Route path="/services">
            <Services></Services>
          </Route>

          <Route path="/about">
            <About></About>
          </Route>

          <Route path="*">
            <Error></Error>
          </Route>




        </Switch>



      </Router>











    </div>
  );
}

export default App;
