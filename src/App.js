import './App.css';
import { Navbar } from './Component/Navbar';
import { News } from './Component/News'
import {
  BrowserRouter as Router,
  Routes,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/'><News key="general" pageSize={6} country="in" category="general" /></Route>
          <Route exact path='/business'><News key="general" pageSize={6} country="in" category="business" /></Route>
          <Route exact path='/entertainment'><News key="entertainment" pageSize={6} country="in" category="entertainment" /></Route>
          <Route exact path='/technology'><News key="technology" pageSize={6} country="in" category="technology" /></Route>
          <Route exact path='/science'><News key="science" pageSize={6} country="in" category="science" /></Route>
          <Route exact path='/sports'><News  key="sports" pageSize={6} country="in" category="sports" /></Route>
          <Route exact path='/health'><News  key="health" pageSize={6} country="in" category="health" /></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
