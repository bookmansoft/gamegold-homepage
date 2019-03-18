import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import HomePage from './routes/Home';
import Home2Page from './routes/Home2';
import Home3Page from './routes/Home3';
import Home4Page from './routes/Home4';

import EnPage from './routes/En';
import En2Page from './routes/En2';
import En3Page from './routes/En3';
import En4Page from './routes/En4';
import En5Page from './routes/En5';

import TwPage from './routes/Tw';
import Tw2Page from './routes/Tw2';
import Tw3Page from './routes/Tw3';
import Tw4Page from './routes/Tw4';
import Tw5Page from './routes/Tw5';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={EnPage} />

        <Route path="/Home" exact component={HomePage} />
        <Route path="/Home2" exact component={Home2Page} />
        <Route path="/Home3" exact component={Home3Page} />
        <Route path="/Home4" exact component={Home4Page} />

        <Route path="/En" exact component={EnPage} />
        <Route path="/En2" exact component={En2Page} />
        <Route path="/En3" exact component={En3Page} />
        <Route path="/En4" exact component={En4Page} />
        <Route path="/En5" exact component={En5Page} />

        <Route path="/Tw" exact component={TwPage} />
        <Route path="/Tw2" exact component={Tw2Page} />
        <Route path="/Tw3" exact component={Tw3Page} />
        <Route path="/Tw4" exact component={Tw4Page} />
        <Route path="/Tw5" exact component={Tw5Page} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
