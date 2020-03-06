import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

//components
import Groups from "./components/Groups/Groups";
import Students from "./components/Students/Students";

function App() {
  return (
      <Router>
          <div className = 'header'>
              <Link className = 'link' to = '/groups'>Groups</Link>
              <Link className = 'link' to = '/students'>Students</Link>
          </div>
          <div className = 'content' >
              <Switch>
                  <Route path = '/groups'>
                      <Groups />
                  </Route>
                  <Route path = '/students'>
                      <Students />
                  </Route>
              </Switch>
          </div>
      </Router>
    
  );
}

export default App;
