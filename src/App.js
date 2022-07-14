import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import { useDataContext } from './DataProvider';

import './App.css';

import AuthPage from './AuthPage';
import DetailPage from './DetailPage';
import ListPage from './ListPage';
import FavoritesPage from './FavoritesPage';

export default function App() {
  const user = useDataContext();

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/list">List</Link>
            </li>
            <li>
              <Link to="/detail">Detail</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            {user ? <Redirect to="/list" /> : <AuthPage />}
            <AuthPage />
          </Route>
          <Route exact path="/list">
            {
              !user ? <Redirect to="/" /> : <AuthPage />
              // : <SearchPage /> AuthPage should be replaced above
            }
            <ListPage />
          </Route>
          <Route exact path="/episode/:number">
            {!user ? <Redirect to="/" /> : <DetailPage />}
            <DetailPage />
          </Route>
          <Route exact path="/favorites/:id">
            {!user ? <Redirect to="/" /> : <FavoritesPage />}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
