import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/Home';
import Home2Page from './routes/Home2';
import Home3Page from './routes/Home3';
import Home4Page from './routes/Home4';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/Home2" exact component={Home2Page} />
        <Route path="/Home3" exact component={Home3Page} />
        <Route path="/Home4" exact component={Home4Page} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
