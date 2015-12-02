import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import { createHistory } from 'history'

import App from './pages/app.jsx';
import Home from './pages/home.jsx';
import CostumeIdeas from './pages/costume-ideas.jsx';
import Editor from './pages/editor.jsx';
import Info from './pages/info.jsx';
import NotFound from './pages/notFound.jsx';

const historyOptions = {
  queryKey : false
};

const routes = (
  <Router history={createHistory(historyOptions)}>
    <Route path='/' component={ App }>
      <IndexRoute component={ Home }/>
      <Route path='info' component={ Info } />
      <Route path='home' component={ Home } />
      <Route path='costume-ideas' component={ CostumeIdeas } />
      <Route path='editor' component={ Editor } />
      <Route path='*' component={NotFound}/>
    </Route>
  </Router>
);

export default routes;
