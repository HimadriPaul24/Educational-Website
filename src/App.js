import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import About from './components/About/About';
import Site from './components/Site/Site';
import Notfound from './components/Notfound/Notfound';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/home">
            <Home></Home>

          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/services">
            <Services></Services>

          </Route>
          <Route path="/site">
            <Site></Site>

          </Route>
          <Route exact path="/">
            <Home></Home>

          </Route>
          <Route>
            <Notfound></Notfound>
          </Route>


        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
