import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import AuthPage from './AuthPage';
import DetailPage from './DetailPage';
import ListPage from './ListPage';

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <AuthPage />
          </Route>
          <Route exact path="/list">
            <ListPage />
          </Route>
          <Route exact path="/detail">
            <DetailPage />
          </Route>
        </Switch>
        
      </div>
    </Router>
  );
}
