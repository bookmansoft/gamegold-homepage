import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/Home';
import Home2Page from './routes/Home2';
import Home3Page from './routes/Home3';
import Home4Page from './routes/Home4';

import EnPage from './routes/En';
import En2Page from './routes/En2';
import En3Page from './routes/En3';
import En4Page from './routes/En4';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/Home2" exact component={Home2Page} />
        <Route path="/Home3" exact component={Home3Page} />
        <Route path="/Home4" exact component={Home4Page} />

        <Route path="/En" exact component={EnPage} />
        <Route path="/En2" exact component={En2Page} />
        <Route path="/En3" exact component={En3Page} />
        <Route path="/En4" exact component={En4Page} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
